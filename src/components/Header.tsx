import styled from 'styled-components';
import pokeballImg from '../assets/pokeball.png';
import { Search } from './Search';
import { theme } from '../themes/theme';

const Container = styled.header`
  background: linear-gradient(to right, #f14c5c 0%, #ed1f33 50%, #f14c5c 100%);
  text-align: center;
  color: white;
  font-family: 'PokemonClassic';
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  align-items: center;
  overflow: hidden;

  @media (max-width: ${theme.mediaQueryBreakpoints.tablet}) {
    align-items: flex-end;
  }
`;

const Pokeball = styled.img`
  width: 220px;
  height: 220px;
  z-index: 1;

  @media (max-width: ${theme.mediaQueryBreakpoints.tablet}) {
    width: 110px;
    height: 110px;
  }
  @media (max-width: ${theme.mediaQueryBreakpoints.cellphone}) {
    width: 55px;
    height: 55px;
  }
`;

const PokeballLeft = styled(Pokeball)``;

const PokeballRight = styled(Pokeball)`
  transform: scaleX(-1);
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`;

const Title = styled.h1``;

export const Header = () => {
  return (
    <Container>
      <PokeballLeft src={pokeballImg} alt="Pokeball" />
      <TitleWrapper>
        <Title>Pokémon Pokédex</Title>
        <Search />
      </TitleWrapper>
      <PokeballRight src={pokeballImg} alt="Pokeball" />
    </Container>
  );
};
