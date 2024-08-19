import { useState, useEffect } from 'react';
import { getAllPokemon } from '../services/pokeapi';

export interface Pokemon {
  name: string;
  url: string;
  id: number;
}

interface PokemonWithoutId {
  name: string;
  url: string;
}

export const useFetchAllPokemon = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const indexPokemons = (data: PokemonWithoutId[]) => {
    const indexedPokemonList = data.map((pokemon: any, index: number) => {
      let spriteIndex = index + 1;
      if (spriteIndex > 1025) {
        spriteIndex = 10001 + (spriteIndex - 1026);
      }
      return { ...pokemon, id: spriteIndex };
    });
    return indexedPokemonList;
  };

  const makePokemonlist = async () => {
    try {
      setLoading(true);
      const data = await getAllPokemon();
      const indexedPokemons = indexPokemons(data);
      setPokemonList(indexedPokemons);
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
