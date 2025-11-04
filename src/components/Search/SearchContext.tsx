import { createContext } from "react";


export type SearchContextType = {
  values: Record<string, string>;
  labels: Record<string, string>;
  dateRange: { startDate: string; endDate: string };
  updateValues: (key: string, value: string, label?: string) => void;
  updateDateRange: (startDate: string, endDate: string) => void;
  onSelectDateOption: (days: number) => void;
};

export const SearchContext = createContext<SearchContextType>({
  values: {},
  labels: {},
  dateRange: { startDate: '', endDate: '' },
  updateValues: () => {},
  updateDateRange: () => {},
  onSelectDateOption: () => {},
});