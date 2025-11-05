import { useState, useEffect, useCallback } from 'react';
import { getDateRange, getCurrentDate } from '@/utils/date';

export type UseSearchReturn = {
  values: Record<string, string>;
  labels: Record<string, string>;
  dateRange: { startDate: string; endDate: string };
  updateValues: (key: string, value: string, label?: string) => void;
  updateDateRange: (startDate: string, endDate: string) => void;
};

type SearchState = {
  values: Record<string, string>;
  labels: Record<string, string>;
  dateRange: { startDate: string; endDate: string };
};

// 전역 store
const globalStore = {
  state: {
    values: {},
    labels: {},
    dateRange: getDateRange(150, getCurrentDate()),
  } as SearchState,
  listeners: new Set<() => void>(),
  
  subscribe(listener: () => void) {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  },
  
  notify() {
    this.listeners.forEach(listener => listener());
  },
  
  updateValues(key: string, value: string, label?: string) {
    if (value) {
      this.state.values[key] = value;
      if (label) {
        this.state.labels[key] = label;
      }
    } else {
      delete this.state.values[key];
      if (label !== undefined) {
        delete this.state.labels[key];
      }
    }
    this.notify();
  },
  
  updateDateRange(startDate: string, endDate: string) {
    this.state.dateRange.startDate = startDate;
    this.state.dateRange.endDate = endDate;
    this.notify();
  },
};

export function useSearch(): UseSearchReturn {
  const [, setTick] = useState(0);
  
  useEffect(() => {
    const unsubscribe = globalStore.subscribe(() => {
      setTick(prev => prev + 1);
    });
    return unsubscribe;
  }, []);
  
  const updateValues = useCallback((key: string, value: string, label?: string) => {
    globalStore.updateValues(key, value, label);
  }, []);
  
  const updateDateRange = useCallback((startDate: string, endDate: string) => {
    globalStore.updateDateRange(startDate, endDate);
  }, []);
  
  return {
    values: globalStore.state.values,
    labels: globalStore.state.labels,
    dateRange: globalStore.state.dateRange,
    updateValues,
    updateDateRange,
  };
}