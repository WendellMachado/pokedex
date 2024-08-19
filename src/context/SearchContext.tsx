import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from 'react';
import { Pokemon, useFetchAllPokemon } from '../hooks/useFetchAllPokemon';

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
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const { pokemonList, loading, error } = useFetchAllPokemon();

  const itemsPerPage = 20;

  const [currentPage, setCurrentPage] = useState(1);

  const [totalPages, setTotalPages] = useState(
    Math.ceil(pokemonList.length / itemsPerPage),
  );

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const getPaginatedData = (data: Pokemon[]) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return data.slice(startIndex, startIndex + itemsPerPage);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const setPage = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const filterPokemonByName = (pokemonList: Pokemon[]) => {
    return pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  };

  const filterPokemonByNumber = (pokemonList: Pokemon[]) => {
    return pokemonList.filter((pokemon) =>
      String(pokemon.id).includes(searchTerm),
    );
  };

  const isSearchByName = () => {
    const isNumeric = !isNaN(Number(searchTerm));
    if (isNumeric) {
      return false;
    }
    return true;
  };

  const filteredPokemonList = useMemo(() => {
    if (!pokemonList) return [];

    const filtered = isSearchByName()
      ? filterPokemonByName(pokemonList)
      : filterPokemonByNumber(pokemonList);

    const filteredAndPaginated = getPaginatedData(filtered);

    const totalFilteredPages =
      searchTerm.length > 0
        ? Math.ceil(filtered.length / itemsPerPage)
        : totalPages;

    setTotalPages(totalFilteredPages);

    return filteredAndPaginated;
  }, [pokemonList, searchTerm, currentPage]);

  useEffect(() => {
    setTotalPages(Math.ceil(pokemonList.length / itemsPerPage));
  }, [pokemonList]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        filteredPokemonList,
        loading,
        error,
        currentPage,
        totalPages,
        setTotalPages,
        nextPage,
        prevPage,
        setPage,
      }}
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
