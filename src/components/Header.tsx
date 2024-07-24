"use client";
import { ChangeEvent } from "react";
import SearchInput from "./SearchInput";
import useSearch from "@/hooks/useSearch";

const Header = () => {
  const { searchInput, setSearchInput } = useSearch();

  const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchInput(searchValue);
  };

  return (
    <div className="bg-base-100 text-base-content sticky top-0 z-50 bg-opacity-90 backdrop-blur transition-shadow duration-100">
      <nav className="navbar w-full flex justify-between">
        <div className="text-3xl font-bold font-mono">App Store</div>
        <SearchInput
          style="max-w-xs"
          placeholder="Search Apps"
          value={searchInput}
          onChange={handleSearchInput}
        />
      </nav>
    </div>
  );
};

export default Header;
