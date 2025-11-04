import { SearchContext } from "./SearchContext";
import { useSearch } from "./useSearch";

type SearchProviderProps = {
  children: React.ReactNode;
  initialValues?: Record<string, string>;
  initialDateRange?: { startDate: string; endDate: string };
};

export const SearchProvider = ({ 
  children,
  initialValues,
  initialDateRange,
}: SearchProviderProps) => {
  const contextValue = useSearch({ initialValues, initialDateRange });
  
  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};

