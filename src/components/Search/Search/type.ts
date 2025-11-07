export interface DateRange {
    startDate: string;
    endDate: string;
  }
  
export interface SearchValues {
  [key: string]: string;
}

export interface SearchLabels {
  [key: string]: string;
}

export type SearchParams = SearchValues | DateRange;

export interface SearchStore {
  state: {
    values: SearchValues;
    labels: SearchLabels;
    dateRange: DateRange;
  };
  listeners: Set<() => void>;
  subscribe(listener: () => void): () => void;
  notify(): void;
  updateValues(key: string, value: string, label?: string): void;
  updateDateRange(startDate: string, endDate: string): void;
}