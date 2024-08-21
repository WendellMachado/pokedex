import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import whosThatPokemon from '../assets/whosthatpokemon.png';
import { useFetchPokemonDetails } from '../hooks/useFetchPokemonDetails';
import { PokemonTypeColors, theme } from '../themes/theme';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
  align-items: flex-start;
`;

const GoBackButton = styled.button`
  margin-top: 1rem;
  background-color: #f14c5c;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
`;

const DetailsCardsWrapper = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-items: center;
  justify-content: center;
  gap: 1rem;
  flex-direction: row;
`;

const DetailsCard = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 16px;
  background-color: #00000044;
`;

const ShinyDetailsCard = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 16px;
  border: 4px solid #fad958;
  background: linear-gradient(217deg, #ede9c7 14.29%, #e1c863 95.26%);
`;

const PokemonImage = styled.img`
  width: 20%;
  object-fit: contain;
`;

const PokemonName = styled.h2`
  color: #333;
  text-align: center;
  font-family: 'PokemonClassic';
  font-size: 1rem;
  text-align: center;
  word-wrap: break-word;
  width: 100%;
`;

const PokemonNumber = styled.p`
  word-wrap: break-word;
  width: 100%;
  color: #333;
  text-align: center;
  font-family: 'PokemonClassic';
  font-size: 0.6rem;
`;

const PokemonTypeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const PokemonType = styled.div`
  background-color: ${(props) => props.color || 'green'};
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;

  p {
    color: #fff;
    text-align: center;
    font-family: 'PokemonClassic';
    font-size: 0.7rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    word-wrap: break-word;
    width: 100%;
  }
`;

const ShinyVersion = styled.div`
  color: #2d2927;
  text-align: center;
  font-family: 'PokemonClassic';
  font-size: 1rem;
`;

const StatusCard = styled.div`
  padding: 1rem;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  gap: 1rem;
  width: 50%;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  border-radius: 16px;
  background-color: #00000044;
`;

const Status = styled.div`
  display: flex;
  padding: 4px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.8);
  color: #000;

  font-family: 'PokemonClassic';
  font-size: 0.8rem;
`;

export const DetailsWrapper = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { pokemonDetails, loading, error } = useFetchPokemonDetails(
    Number(id) || 1,
  );

  const hasTwoTypes = pokemonDetails && pokemonDetails?.types.length > 1;

  const getTypeColor = (typeIndex: number) => {
    const type = pokemonDetails?.types[typeIndex].type.name || 'bug';
    return theme.pokemonTypesColors[type as keyof PokemonTypeColors];
  };

  return (
    <Wrapper>
      <ButtonsContainer>
        <GoBackButton onClick={() => navigate(-1)}>Voltar</GoBackButton>
      </ButtonsContainer>
      <DetailsCardsWrapper>
        <DetailsCard>
          {' '}
          <PokemonImage
            src={
              pokemonDetails?.sprites.other['official-artwork'].front_default
            }
            alt={pokemonDetails?.name}
            onError={(e) => {
              e.currentTarget.src = whosThatPokemon;
            }}
          />
          <PokemonName>{pokemonDetails?.name}</PokemonName>
          <PokemonNumber>{pokemonDetails?.id}</PokemonNumber>
          <PokemonTypeContainer>
            <PokemonType
              onClick={() =>
                navigate('/', {
                  state: { type: pokemonDetails?.types[0].type.name },
                })
              }
              color={getTypeColor(0)}
            >
              <p>{pokemonDetails?.types[0].type.name}</p>
            </PokemonType>
            {hasTwoTypes && (
              <PokemonType
                onClick={() =>
                  navigate('/', {
                    state: { type: pokemonDetails?.types[1].type.name },
                  })
                }
                color={getTypeColor(1)}
              >
                <p>{pokemonDetails?.types[1].type.name}</p>
              </PokemonType>
            )}
          </PokemonTypeContainer>
        </DetailsCard>
        <ShinyDetailsCard>
          {' '}
          <PokemonImage
            src={pokemonDetails?.sprites.other['official-artwork'].front_shiny}
            alt={pokemonDetails?.name}
            onError={(e) => {
              e.currentTarget.src = whosThatPokemon;
            }}
          />
          <ShinyVersion>Versão Shiny</ShinyVersion>
          <PokemonNumber>{pokemonDetails?.id}</PokemonNumber>
          <PokemonTypeContainer>
            <PokemonType
              onClick={() =>
                navigate('/', {
                  state: { type: pokemonDetails?.types[0].type.name },
                })
              }
              color={getTypeColor(0)}
            >
              <p>{pokemonDetails?.types[0].type.name}</p>
            </PokemonType>
            {hasTwoTypes && (
              <PokemonType
                onClick={() =>
                  navigate('/', {
                    state: { type: pokemonDetails?.types[1].type.name },
                  })
                }
                color={getTypeColor(1)}
              >
                <p>{pokemonDetails?.types[1].type.name}</p>
              </PokemonType>
            )}
          </PokemonTypeContainer>
        </ShinyDetailsCard>
      </DetailsCardsWrapper>
      <StatusCard>
        <Status>HP: {pokemonDetails?.stats[0].base_stat}</Status>
        <Status>Ataque: {pokemonDetails?.stats[1].base_stat}</Status>
        <Status>Defesa: {pokemonDetails?.stats[2].base_stat}</Status>
        <Status>Ataque Especial: {pokemonDetails?.stats[3].base_stat}</Status>
        <Status>Defesa Especial: {pokemonDetails?.stats[4].base_stat}</Status>
        <Status>Velocidade: {pokemonDetails?.stats[5].base_stat}</Status>
      </StatusCard>
    </Wrapper>
  );
};
