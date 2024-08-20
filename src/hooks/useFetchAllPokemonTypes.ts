import { useEffect, useState } from 'react';
import { getAllPokemonTypes } from '../services/pokeapi';

export const useFetchPokemonTypes = () => {
  const [types, setTypes] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAllPokemonTypes = async () => {
    try {
      setLoading(true);
      const data = await getAllPokemonTypes();
      setTypes(data.map((type: { name: string }) => type.name));
    } catch (error) {
      console.error(error);
      setError('Falha ao buscar os tipos de pokemon.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllPokemonTypes();
  }, []);

  return { types, loading, error };
};
