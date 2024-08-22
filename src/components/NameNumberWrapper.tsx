import styled from 'styled-components';
import { theme } from '../themes/theme';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`;

const PokemonName = styled.h2`
  font-family: 'PokemonClassic';
  font-size: 1.2rem;
  text-align: center;
  color: #333;

  @media (max-width: ${theme.mediaQueryBreakpoints.cellphone}) {
    font-size: 0.8rem;
  }
`;

const PokemonNumber = styled.p`
  font-family: 'PokemonClassic';
  font-size: 1rem;
  text-align: center;
  color: #333;
  @media (max-width: ${theme.mediaQueryBreakpoints.cellphone}) {
    font-size: 0.5rem;
  }
`;

export const NameNumberWrapper = ({ id, name }: any) => {
  return (
    <Wrapper>
      <PokemonNumber>#{id}</PokemonNumber>
      <PokemonName>{name}</PokemonName>
    </Wrapper>
  );
};
