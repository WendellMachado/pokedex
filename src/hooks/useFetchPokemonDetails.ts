import { useEffect, useState } from 'react';
import { getPokemonDetails, PokemonDetails } from '../services/pokeapi';

export const useFetchPokemonDetails = (id: number) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails>();

  const fetchPokemonDetails = async () => {
    try {
      setLoading(true);
      const data = await getPokemonDetails(id);
      setPokemonDetails(data);
    } catch (error) {
      console.error(error);
      setError('Tivemos um problema ao carregar o pokemon');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemonDetails();
  }, []);

  return { loading, error, pokemonDetails };
};
