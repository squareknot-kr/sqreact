import { useState } from 'react';
import { SearchContext, SearchContextType } from './SearchContext';
import { getDateRange, DEFAULT_DATE_OPTIONS, getCurrentDate } from '@/utils/date';

type SearchProviderProps = {
  children: React.ReactNode;
  initialValues?: Record<string, string>;
  initialDateRange?: { startDate: string; endDate: string };
};

export const SearchProvider = ({ 
  children, 
  initialValues = {},
  initialDateRange,
}: SearchProviderProps) => {
  const defaultDateRange = initialDateRange || getDateRange(DEFAULT_DATE_OPTIONS[DEFAULT_DATE_OPTIONS.length - 1], getCurrentDate());
  
  const [values, setValues] = useState(initialValues);
  const [labels, setLabels] = useState<Record<string, string>>({});
  const [dateRange, setDateRange] = useState(defaultDateRange);

  const updateValues = (key: string, value: string, label?: string) => {
    setValues(prev => {
      const newValues = { ...prev };
      if (value) newValues[key] = value;
      else delete newValues[key];
      return newValues;
    });
    if (label !== undefined) {
      setLabels(prev => {
        const newLabels = { ...prev };
        if (value) newLabels[key] = label;
        else delete newLabels[key];
        return newLabels;
      });
    }
  };

  const updateDateRange = (startDate: string, endDate: string) => {
    setDateRange({ startDate, endDate });
  };

  const contextValue: SearchContextType = {
    values,
    labels,
    dateRange,
    updateValues,
    updateDateRange,
  };

  console.log('SearchProvider contextValue:', contextValue);

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};