export const BASEURL = 'https://pokeapi.co/api/v2/';

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
