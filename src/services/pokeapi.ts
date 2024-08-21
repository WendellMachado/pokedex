export const BASEURL = 'https://pokeapi.co/api/v2/';

export interface PokemonsFromType {
  pokemon: Pokemon;
  slot: number;
}

export interface Pokemon {
  name: string;
  url: string;
  id: number;
}

export interface PokemonWithoutId {
  name: string;
  url: string;
}

export interface PokemonDetails {
  id: number;
  name: string;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
}

interface Sprites {
  front_default: string;
  front_shiny: string;
  home: HomeSprites;
  other: {
    'official-artwork': OfficialArtworkSprites;
  };
}

interface HomeSprites {
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

interface OfficialArtworkSprites {
  front_default: string;
  front_shiny: string;
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export const getAllPokemon = async () => {
  const response = await fetch(`${BASEURL}pokemon?limit=1302`, {
    method: 'GET',
  });
  const data = await response.json();
  return data.results;
};

export const getAllPokemonTypes = async () => {
  const response = await fetch(`${BASEURL}type?offset=0&limit=100`, {
    method: 'GET',
  });
  const data = await response.json();

  return data.results;
};

export const getPokemonsFromType = async (type: string) => {
  const response = await fetch(`${BASEURL}type/${type}`, {
    method: 'GET',
  });
  const data = await response.json();

  return data.pokemon;
};

export const getPokemonDetails = async (id: number) => {
  const response = await fetch(`${BASEURL}/pokemon/${id}`, {
    method: 'GET',
  });

  const data = await response.json();

  return data;
};
