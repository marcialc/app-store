"use client";
import { useCallback } from "react";
import AppCard from "./AppCard";
import AppCardWrapper from "./AppCardWrapper";
import useSearch from "@/hooks/useSearch";
import useSWR from "swr";
import LoadingSpinner from "./LoadingSpinner";

type APPS = {
  id: number;
  name: string;
  tagline: string;
  image_url: string;
};

const appFetcher = async (url: string) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Error fetching apps");
    }

    const data = await res.json();
    return data.apps;
  } catch (err) {
    console.error(err);
  }
};

const AppList = () => {
  const { searchInput } = useSearch();
  const { data, error, isLoading } = useSWR<APPS[]>(
    "/api/fetchApps",
    appFetcher
  );

  const getAppList = useCallback(() => {
    if (!data) return [];

    if (searchInput === "") {
      return data;
    }
    return data.filter((app) => app.name.toLowerCase().includes(searchInput));
  }, [searchInput, data]);

  if (error) {
    return <p>Error fetching apps</p>;
  }

  if (isLoading) {
    return <LoadingSpinner size="lg" />;
  }

  return (
    <div className="flex flex-col items-center gap-4 my-4 w-full h-full flex-1">
      <AppCardWrapper>
        {getAppList().length > 0 ? (
          getAppList().map((app) => (
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
