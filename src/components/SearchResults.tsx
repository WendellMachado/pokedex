import styled from 'styled-components';
import PokemonCard from './PokemonCard';
import { theme } from '../themes/theme';
import { useSearchContext } from '../context/SearchContext';

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
  const { filteredPokemonList } = useSearchContext();

  return (
    <>
      <ResultsList>
        {filteredPokemonList.map((pokemon) => {
          return (
            <PokemonCard
              name={pokemon.name}
              sprite={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              key={pokemon.id}
            />
          );
        })}
      </ResultsList>
    </>
  );
};
