import { useContext } from 'react';
import { SearchContext, SearchContextType } from './SearchContext';

export function useSearch(): SearchContextType {
  const contextValue = useContext(SearchContext);

  if (contextValue === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }

  return contextValue;
}