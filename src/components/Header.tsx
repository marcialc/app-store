"use client";
import { useCallback, useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import useSearch from "@/hooks/useSearch";
import AvatarMenu from "./AvatarMenu";

const Header = () => {
  const { setSearchInput } = useSearch();
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleSearchInput = useCallback(
    (value: string) => {
      const searchValue = value.toLowerCase();
      setSearchInput(searchValue);
    },
    [setSearchInput]
  );

  useEffect(() => {
    const handleSearchKeyDown = (event: KeyboardEvent) => {
      if (event.key === "k" && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        setIsSearchFocused(true);
      }
    };

    document.body.addEventListener("keydown", handleSearchKeyDown);

    return () => {
      document.body.removeEventListener("keydown", handleSearchKeyDown);
    };
  }, []);

  const handleSearchBlur = useCallback(() => {
    setIsSearchFocused(false);
  }, []);

  return (
    <div className="bg-base-100 text-base-content sticky top-0 z-50 bg-opacity-90 backdrop-blur transition-shadow duration-100">
      <nav className="navbar w-full flex justify-center gap-4 flex-wrap sm:justify-between">
        <div className="text-3xl font-bold font-mono">App Store</div>
        <SearchInput
          className="max-w-xs"
          placeholder="Search Apps"
          onChange={handleSearchInput}
          isFocused={isSearchFocused}
          onBlur={handleSearchBlur}
        />
        <AvatarMenu className="absolute top-1 right-2 sm:relative" />
      </nav>
    </div>
  );
};

export default Header;
