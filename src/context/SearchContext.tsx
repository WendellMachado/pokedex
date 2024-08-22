import React, { createContext, useContext } from 'react';
import { Pokemon } from '../services/pokeapi';
import { useSearchProvider } from '../hooks/useSearchProvider';

interface SearchContextProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filteredPokemonList: Pokemon[];
  loading: boolean;
  error: string | null;

  currentPage: number;
  totalPages: number;
  setTotalPages: (total: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  setPage: (page: number) => void;

  selectedType: string;
  setSelectedType: (type: string) => void;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const SearchProvider = ({
  children,
  initialType = '',
}: {
  children: React.ReactNode;
  initialType: string;
}) => {
  const value = useSearchProvider(initialType);

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearchContext must be used within a SearchProvider');
  }
  return context;
};
