import styled from 'styled-components';
import { PokemonTypeColors, theme } from '../themes/theme';

const PokemonTypeContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const PokemonType = styled.div<{ color: string }>`
  background-color: ${(props) => props.color || 'green'};
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;

  p {
    font-family: 'PokemonClassic';
    font-size: 0.7rem;
    color: white;
    text-align: center;
  }
`;

export const TypeBadge = ({ types, hasTwoTypes, handleTypeClick }: any) => {
  const getTypeColor = (typeIndex: number) => {
    const type = types[typeIndex].type.name;
    return theme.pokemonTypesColors[type as keyof PokemonTypeColors];
  };

  return (
    <PokemonTypeContainer>
      <PokemonType color={getTypeColor(0)} onClick={() => handleTypeClick(0)}>
        <p>{types[0].type.name}</p>
      </PokemonType>
      {hasTwoTypes && (
        <PokemonType color={getTypeColor(1)} onClick={() => handleTypeClick(1)}>
          <p>{types[1].type.name}</p>
        </PokemonType>
      )}
    </PokemonTypeContainer>
  );
};
