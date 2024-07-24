import { NextRequest, NextResponse } from "next/server";
import data from "../../../../public/data.json";

const APP_KEYS = [
  "id",
  "name",
  "tagline",
  "image_url",
  "version",
  "category",
] as const;
type AppKeys = (typeof APP_KEYS)[number];

export async function GET(req: NextRequest) {
  if (req.method !== "GET") {
    return new Response("Method not allowed", { status: 405 });
  }

  const DATA = data;

  if (!DATA || !DATA?.apps) {
    return NextResponse.json(
      { message: "Error fetching apps" },
      { status: 500 }
    );
  }

  let filteredApps = DATA.apps;

  const { searchParams } = new URL(req.url);
  const filterValue = searchParams.get("filterValue");
  const filterKey = searchParams.get("filterKey") as AppKeys;

  if (filterKey && APP_KEYS.includes(filterKey) && filterValue) {
    filteredApps = filteredApps.filter((app) => {
      if (filterKey !== "id") {
        return app[filterKey]
          .toLowerCase()
          .includes(filterValue.toLocaleLowerCase());
      }
      return app[filterKey] === +filterValue;
    });
  }

  return NextResponse.json({ apps: filteredApps }, { status: 200 });
}
