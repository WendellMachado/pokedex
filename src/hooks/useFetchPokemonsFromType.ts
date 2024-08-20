import { useState } from 'react';
import { Pokemon } from './useFetchAllPokemon';
import { getPokemonsFromType } from '../services/pokeapi';

export const useFetchPokemonsFromType = () => {
  const [pokemonListFromType, setPokemonListFromType] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPokemonsFromType = async (type: string) => {
    try {
      setLoading(true);
      const data = await getPokemonsFromType(type);

      const parsedData = data.map(
        (data: { pokemon: Pokemon; slot: number }) => {
          const { pokemon } = data;
          const id = parseInt(
            pokemon.url.split('/').filter(Boolean).pop() || '',
            10,
          );

          return { ...pokemon, id };
        },
      );

      setPokemonListFromType(parsedData);
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
