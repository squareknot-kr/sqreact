import { createContext, useReducer, useCallback } from "react";
import { getDateRange, getCurrentDate } from '@/utils/date';

export type SearchState = {
  values: Record<string, string>;
  labels: Record<string, string>;
  dateRange: { startDate: string; endDate: string };
};

type SearchAction =
  | { type: 'UPDATE_VALUES'; payload: { key: string; value: string; label?: string } }
  | { type: 'UPDATE_DATE_RANGE'; payload: { startDate: string; endDate: string } };

function searchReducer(state: SearchState, action: SearchAction): SearchState {
  switch (action.type) {
    case 'UPDATE_VALUES': {
      const { key, value, label } = action.payload;
      const newValues = { ...state.values };
      const newLabels = { ...state.labels };
      
      if (value) {
        newValues[key] = value;
        if (label) {
          newLabels[key] = label;
        }
      } else {
        delete newValues[key];
        if (label !== undefined) {
          delete newLabels[key];
        }
      }
      
      return {
        ...state,
        values: newValues,
        labels: newLabels,
      };
    }
    case 'UPDATE_DATE_RANGE': {
      return {
        ...state,
        dateRange: {
          startDate: action.payload.startDate,
          endDate: action.payload.endDate,
        },
      };
    }
    default:
      return state;
  }
}

export type SearchContextType = {
  state: SearchState;
  updateValues: (key: string, value: string, label?: string) => void;
  updateDateRange: (startDate: string, endDate: string) => void;
};

type SearchProviderProps = {
  children: React.ReactNode;
  initialValues?: Record<string, string>;
  initialDateRange?: { startDate: string; endDate: string };
};

export const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ 
  children,
  initialValues = {},
  initialDateRange,
}: SearchProviderProps) {
  const defaultDateRange = initialDateRange || getDateRange(150, getCurrentDate());
  
  const initialState: SearchState = {
    values: initialValues,
    labels: {},
    dateRange: defaultDateRange,
  };

  const [state, dispatch] = useReducer(searchReducer, initialState);

  const updateValues = useCallback((key: string, value: string, label?: string) => {
    dispatch({ type: 'UPDATE_VALUES', payload: { key, value, label } });
  }, []);

  const updateDateRange = useCallback((startDate: string, endDate: string) => {
    dispatch({ type: 'UPDATE_DATE_RANGE', payload: { startDate, endDate } });
  }, []);

  const contextValue: SearchContextType = {
    state,
    updateValues,
    updateDateRange,
  };
  
  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};