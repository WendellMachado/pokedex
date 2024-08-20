import { PokemonWithoutId, PokemonsFromType } from './services/pokeapi';

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
