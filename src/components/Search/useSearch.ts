import { useMemo, useState, useCallback } from 'react';
import { SearchContextType } from './SearchContext';
import { getDateRange, DEFAULT_DATE_OPTIONS, getCurrentDate } from '@/utils/date';

type UseSearchOptions = {
  initialValues?: Record<string, string>;
  initialDateRange?: { startDate: string; endDate: string };
};

export function useSearch(options: UseSearchOptions = {}): SearchContextType {
  const { 
    initialValues = {},
    initialDateRange = getDateRange(DEFAULT_DATE_OPTIONS[DEFAULT_DATE_OPTIONS.length - 1], getCurrentDate())
  } = options;

  const [values, setValues] = useState(initialValues);
  const [labels, setLabels] = useState<Record<string, string>>({});
  const [dateRange, setDateRange] = useState(initialDateRange);

  const updateValues = useCallback((key: string, value: string, label?: string) => {
    setValues(prev => {
      const newValues = { ...prev };
      if (value) {
        newValues[key] = value;
      } else {
        delete newValues[key];
      }
      return newValues;
    });
    if (label !== undefined) {
      setLabels(prev => {
        const newLabels = { ...prev };
        if (value) {
          newLabels[key] = label;
        } else {
          delete newLabels[key];
        }
        return newLabels;
      });
    }
  }, []);
  
  const updateDateRange = useCallback((startDate: string, endDate: string) => {
    setDateRange({ startDate, endDate });
  }, []);
  
  const onSelectDateOption = useCallback((days: number) => {
    const { startDate, endDate } = getDateRange(days, getCurrentDate());
    updateDateRange(startDate, endDate);
  }, [updateDateRange]);

  const contextValue = useMemo<SearchContextType>(() => ({
    values,
    labels,
    dateRange,
    updateValues,
    updateDateRange,
    onSelectDateOption,
  }), [values, labels, dateRange, updateValues, updateDateRange, onSelectDateOption]);

  return contextValue;
}

