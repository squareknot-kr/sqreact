import { useContext } from 'react';
import { SearchContext, SearchContextType } from './SearchContext';

export function useSearch(): SearchContextType {
  const contextValue = useContext(SearchContext);
  return contextValue;
}