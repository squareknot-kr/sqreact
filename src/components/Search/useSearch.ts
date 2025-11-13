import { useSyncExternalStore } from 'react';
import { DateRange, SearchLabels, SearchValues } from './Search/type';
import { searchStore } from './Search/store';

export type UseSearchReturn = {
  values: SearchValues;
  labels: SearchLabels;
  dateRange: DateRange;
  updateValues: (key: string, value: string, label?: string) => void;
  updateDateRange: (startDate: string, endDate: string) => void;
  resetAll: () => void;
};

const subscribe = (listener: () => void) => searchStore.subscribe(listener);
const getSnapshot = () => searchStore.state;

export function useSearch(): UseSearchReturn {
  const state = useSyncExternalStore(subscribe, getSnapshot);
  
  const updateValues = (key: string, value: string, label?: string) => {
    searchStore.updateValues(key, value, label);
  };
  
  const updateDateRange = (startDate: string, endDate: string) => {
    searchStore.updateDateRange(startDate, endDate);
  };

  const resetAll = () => {
    searchStore.resetAll();
  };

  return {
    ...state,
    updateValues,
    updateDateRange,
    resetAll,
  };
}