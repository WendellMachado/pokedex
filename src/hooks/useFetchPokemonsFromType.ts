import { useState } from 'react';
import { getPokemonsFromType, Pokemon } from '../services/pokeapi';
import { getPokemonsFromTypeWithId } from '../utils';

export const useFetchPokemonsFromType = () => {
  const [pokemonListFromType, setPokemonListFromType] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPokemonsFromType = async (type: string) => {
    try {
      setLoading(true);
      const data = await getPokemonsFromType(type);

      const pokemonsFromTypeWithId = getPokemonsFromTypeWithId(data);

      setPokemonListFromType(pokemonsFromTypeWithId);
    } catch (error) {
      console.error(error);
      setError('Failed to fetch Pokémons from type.');
    } finally {
      setLoading(false);
    }
  };

  const resetPokemonListFromType = () => {
    setPokemonListFromType([]);
  };

  return {
    pokemonListFromType,
    loading,
    error,
    fetchPokemonsFromType,
    resetPokemonListFromType,
  };
};
