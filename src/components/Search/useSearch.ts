import { useContext } from 'react';
import { SearchContext } from './SearchContext';

export type UseSearchReturn = {
  values: Record<string, string>;
  labels: Record<string, string>;
  dateRange: { startDate: string; endDate: string };
  updateValues: (key: string, value: string, label?: string) => void;
  updateDateRange: (startDate: string, endDate: string) => void;
};

export function useSearch(): UseSearchReturn {
  const contextValue = useContext(SearchContext);

  const contextWithFlag = contextValue as typeof contextValue & { __isProvider?: boolean };
  if (!contextWithFlag.__isProvider) {
    throw new Error('useSearch must be used within a SearchProvider. Please wrap your component with <SearchProvider>.');
  }

  return {
    values: contextValue.state.values,
    labels: contextValue.state.labels,
    dateRange: contextValue.state.dateRange,
    updateValues: contextValue.updateValues,
    updateDateRange: contextValue.updateDateRange,
  };
}