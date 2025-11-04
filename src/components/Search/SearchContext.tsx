import { createContext } from "react";


export type SearchContextType = {
  selectedValues: Record<string, string>;
  labels: Record<string, string>;
  dateRange: { startDate: string; endDate: string };
  updateValues: (key: string, value: string, label?: string) => void;
  updateDateRange: (startDate: string, endDate: string) => void;
};

export const SearchContext = createContext<SearchContextType>({
  selectedValues: {},
  labels: {},
  dateRange: { startDate: '', endDate: '' },
  updateValues: () => {},
  updateDateRange: () => {},
});