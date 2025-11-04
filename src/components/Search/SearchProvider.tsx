import { SearchContext } from "./SearchContext";
import { useSearch } from "./useSearch";

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const contextValue = useSearch();
  
  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};