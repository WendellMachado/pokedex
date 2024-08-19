import React, { createContext, useContext, useState, useMemo } from 'react';
import { Pokemon, useFetchAllPokemon } from '../hooks/useFetchAllPokemon';

interface SearchContextProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filteredPokemonList: Pokemon[];
  loading: boolean;
  error: string | null;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { pokemonList, loading, error } = useFetchAllPokemon();

  const filteredPokemonList = useMemo(() => {
    if (!pokemonList) return [];
    return pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [pokemonList, searchTerm]);

  return (
    <SearchContext.Provider
      value={{ searchTerm, setSearchTerm, filteredPokemonList, loading, error }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearchContext must be used within a SearchProvider');
  }
  return context;
};
