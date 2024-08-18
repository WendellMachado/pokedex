import styled from 'styled-components';
import PokemonCard from './PokemonCard';
import { theme } from '../themes/theme';

const ResultsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  justify-content: center;
  gap: 1rem;
  margin: 1rem auto;
  width: 50%;

  @media (max-width: ${theme.mediaQueryBreakpoints.tablet}) {
    grid-template-columns: repeat(2, 0.5fr);
    grid-template-rows: repeat(10, 1fr);
  }
`;

export const SearchResults = () => {
  const pokemons: any = [];
  for (let i = 1; i < 21; i++) {
    pokemons.push(
      <PokemonCard
        name={`pikachu`}
        sprite={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`}
        key={i}
      />,
    );
  }
  return (
    <>
      <ResultsList>
        {pokemons.map((pokemon: JSX.Element) => pokemon)}
      </ResultsList>
      ;
    </>
  );
};
