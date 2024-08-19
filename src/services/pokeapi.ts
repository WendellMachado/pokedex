export const BASEURL = 'https://pokeapi.co/api/v2/';

export const getAllPokemon = async () => {
  const response = await fetch(`${BASEURL}pokemon?limit=1302`, {
    method: 'GET',
  });
  const data = await response.json();
  return data.results;
};
