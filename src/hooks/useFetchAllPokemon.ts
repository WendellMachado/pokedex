import { useState, useEffect } from 'react';
import { getAllPokemon, Pokemon } from '../services/pokeapi';
import { getPokemonListWithId } from '../utils';

export const useFetchAllPokemon = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const makePokemonlist = async () => {
    try {
      setLoading(true);
      const data = await getAllPokemon();
      const pokemonlistWithId = getPokemonListWithId(data);
      setPokemonList(pokemonlistWithId);
    } catch (error) {
      console.error(error);
      setError('Tivemos um problema ao carregar os pokemons');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    makePokemonlist();
  }, []);

  return { pokemonList, loading, error };
};
