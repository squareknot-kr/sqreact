import { createContext } from "react";

type Values = Record<string, string>;
type DateRange = { startDate: string; endDate: string };
type ValuesUpdater = (key: string, value: string) => void;
type DateRangeUpdater = (start: string, end: string) => void;
type DateOptionSelector = (days: number) => void;

export type SearchContextType = {
  values: Values;
  dateRange: DateRange;
  updateValues: ValuesUpdater;
  updateDateRange: DateRangeUpdater;
  onSelectDateOption: DateOptionSelector;
};

export const SearchContext = createContext<SearchContextType>({
  values: {},
  dateRange: { startDate: '', endDate: '' },
  updateValues: () => {},
  updateDateRange: () => {},
  onSelectDateOption: () => {},
});