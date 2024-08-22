import { useState, useMemo, useEffect } from 'react';
import { useFetchPokemonsFromType } from '../hooks/useFetchPokemonsFromType';
import { useFetchAllPokemon } from '../hooks/useFetchAllPokemon';
import { useNavigate } from 'react-router-dom';
import {
  getPaginatedData,
  filterPokemonByName,
  filterPokemonByNumber,
  isSearchByName,
} from '../utilities/searchUtils';

export const useSearchProvider = (initialType: string) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>(initialType);

  const { pokemonList, loading, error } = useFetchAllPokemon();
  const navigate = useNavigate();

  const {
    fetchPokemonsFromType,
    pokemonListFromType,
    resetPokemonListFromType,
  } = useFetchPokemonsFromType();

  const itemsPerPage = 20;

  const [currentPage, setCurrentPage] = useState(1);

  const [totalPages, setTotalPages] = useState(
    Math.ceil(pokemonList.length / itemsPerPage),
  );

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const setPage = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const filteredPokemonList = useMemo(() => {
    if (!pokemonList) return [];
    const listToConsider = selectedType ? pokemonListFromType : pokemonList;

    const filtered = isSearchByName(searchTerm)
      ? filterPokemonByName(listToConsider, searchTerm)
      : filterPokemonByNumber(listToConsider, searchTerm);

    const filteredAndPaginated = getPaginatedData(
      filtered,
      currentPage,
      itemsPerPage,
    );

    setTotalPages(Math.ceil(filtered.length / itemsPerPage));

    return filteredAndPaginated;
  }, [pokemonList, searchTerm, currentPage, pokemonListFromType]);

  useEffect(() => {
    setTotalPages(Math.ceil(pokemonList.length / itemsPerPage));
  }, [pokemonList]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  useEffect(() => {
    setCurrentPage(1);
    navigate('/', { state: { selectedType: selectedType } });
    if (selectedType) {
      fetchPokemonsFromType(selectedType);
    } else {
      resetPokemonListFromType();
    }
  }, [selectedType]);

  return {
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
    selectedType,
    setSelectedType,
  };
};
