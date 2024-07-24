"use client";
import AppCard from "./AppCard";
import AppCardWrapper from "./AppCardWrapper";
import useSearch from "@/hooks/useSearch";
import useSWR from "swr";
import LoadingSpinner from "./LoadingSpinner";

export type APPS = {
  id: number;
  name: string;
  tagline: string;
  image_url: string;
  version: string;
  category: string;
};

const appFetcher = async (
  url: string,
  searchInput: string
): Promise<APPS[]> => {
  try {
    const res = await fetch(
      `${url}?filterKey=name&filterValue=${encodeURIComponent(searchInput)}`
    );

    if (!res.ok) {
      throw new Error("Error fetching apps");
    }

    const data = await res.json();
    return data.apps;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const AppList = () => {
  const { searchInput } = useSearch();
  const { data, error, isLoading } = useSWR<APPS[]>(
    ["/api/fetchApps", searchInput],
    ([url, searchInput]) => appFetcher(url, searchInput as string)
  );

  if (error) {
    return <p className="text-red-500">Error fetching apps</p>;
  }

  if (isLoading) {
    return <LoadingSpinner size="lg" />;
  }

  return (
    <div className="flex flex-col items-center gap-4 my-4 w-full h-full flex-1">
      <AppCardWrapper>
        {data && data.length > 0 ? (
          data.map((app) => (
            <AppCard
              key={app.id}
              {...app}
              image_url={`${app.image_url}?${app.id}`}
            />
          ))
        ) : (
          <p>No apps found.</p>
        )}
      </AppCardWrapper>
    </div>
  );
};

export default AppList;
