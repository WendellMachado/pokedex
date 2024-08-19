import styled from 'styled-components';
import whosThatPokemon from '../assets/whosthatpokemon.png';

const Card = styled.li`
  background-color: #00000044;
  border-radius: 16px;
  padding: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: scale(1.05);
  }
`;

const PokemonName = styled.h2`
  font-family: 'PokemonClassic';
  font-size: 0.8rem;
  color: #333;
  text-align: center;
  word-wrap: break-word;
  width: 100%;
`;

interface PokemonCardProps {
  name: string;
  sprite: string;
}

const PokemonCard = ({ name, sprite }: PokemonCardProps) => {
  return (
    <Card>
      <img
        src={sprite}
        alt={name}
        onError={(e) => {
          e.currentTarget.src = whosThatPokemon;
        }}
      />
      <PokemonName>{name}</PokemonName>
    </Card>
  );
};

export default PokemonCard;
