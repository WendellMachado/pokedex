import { PokemonImage } from './PokemonImage';
import whosThatPokemon from '../assets/whosthatpokemon.png';
import { styled } from 'styled-components';

const PokemonImgStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '16px',
  backgroundColor: '#00000044',
  background: '#00000044',
  width: '30%',
};

const PokemonShinyImgStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '16px',
  backgroundColor: '#00000044',
  border: '4px solid #fad958',
  background: 'linear-gradient(217deg, #ede9c7 14.29%, #e1c863 95.26%)',
  width: '30%',
};

const Container = styled.div`
  display: 'flex';
  flex-direction: 'row';
  gap: '1rem';
  justify-content: 'center';
`;

export const SpritesWrapper = ({ sprites }: any) => {
  const defaultSprite =
    sprites.other['official-artwork'].front_default || whosThatPokemon;
  const shinySprite =
    sprites.other['official-artwork'].front_shiny || whosThatPokemon;

  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '1rem',
        justifyContent: 'center',
      }}
    >
      <PokemonImage
        src={defaultSprite}
        alt="Default Sprite"
        style={PokemonImgStyle}
      />
      <PokemonImage
        src={shinySprite}
        alt="Shiny Sprite"
        style={PokemonShinyImgStyle}
      />
    </Container>
  );
};
