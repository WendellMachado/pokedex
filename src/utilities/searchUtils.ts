import {
  PokemonWithoutId,
  PokemonsFromType,
  Pokemon,
} from '../services/pokeapi';

export const getPaginatedData = (
  data: Pokemon[],
  currentPage: number,
  itemsPerPage: number,
): Pokemon[] => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  return data.slice(startIndex, startIndex + itemsPerPage);
};

export const filterPokemonByName = (
  pokemonList: Pokemon[],
  searchTerm: string,
): Pokemon[] => {
  return pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
};

export const filterPokemonByNumber = (
  pokemonList: Pokemon[],
  searchTerm: string,
): Pokemon[] => {
  return pokemonList.filter((pokemon) =>
    String(pokemon.id).includes(searchTerm),
  );
};

export const isSearchByName = (searchTerm: string): boolean => {
  const isNumeric = !isNaN(Number(searchTerm));
  return !isNumeric;
};

export const getPokemonsFromTypeWithId = (data: PokemonsFromType[]) => {
  return data.map((data: { pokemon: PokemonWithoutId; slot: number }) => {
    const { pokemon } = data;
    const id = parseInt(pokemon.url.split('/').filter(Boolean).pop() || '', 10);

    return { ...pokemon, id };
  });
};

export const getPokemonListWithId = (data: PokemonWithoutId[]) => {
  return data.map((pokemon) => {
    const id = parseInt(pokemon.url.split('/').filter(Boolean).pop() || '', 10);

    return { ...pokemon, id };
  });
};
