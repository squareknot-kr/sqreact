import { useContext } from 'react';
import { SearchContext, SearchContextType } from './SearchContext';

export function useSearch(): SearchContextType {
  return useContext(SearchContext);
}