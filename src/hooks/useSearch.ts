import SearchContext from "@/context/SearchContext";
import { useContext } from "react";

const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch being used outside of SearchProvider");
  }
  return context;
};

export default useSearch;
