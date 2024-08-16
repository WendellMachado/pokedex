import styled from 'styled-components';
import pokeballImg from '../assets/pokeball.png';
import { Search } from './Search';

const Container = styled.header`
  background: linear-gradient(to right, #f14c5c 0%, #ed1f33 50%, #f14c5c 100%);
  text-align: center;
  color: white;
  font-family: 'PokemonClassic';
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Pokeball = styled.img`
  width: 220px;
  height: 220px;
`;

const PokeballLeft = styled(Pokeball)`
  left: 0;
`;

const PokeballRight = styled(Pokeball)`
  right: 0;
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
