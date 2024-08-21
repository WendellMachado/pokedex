import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import whosThatPokemon from '../assets/whosthatpokemon.png';
import { useFetchPokemonDetails } from '../hooks/useFetchPokemonDetails';
import { PokemonTypeColors, theme } from '../themes/theme';
import { PokemonImage } from './PokemonImage';
import { Loading } from './Loading';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
  margin-top: 1rem;
`;

const GoBackButton = styled.button`
  background-color: #f14c5c;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
`;

const DetailsCardsWrapper = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  gap: 1rem;
`;

const CardBase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  border-radius: 16px;
`;

const DetailsCard = styled(CardBase)`
  background-color: #00000044;
`;

const ShinyDetailsCard = styled(CardBase)`
  border: 4px solid #fad958;
  background: linear-gradient(217deg, #ede9c7 14.29%, #e1c863 95.26%);
`;

const PokemonName = styled.h2`
  font-family: 'PokemonClassic';
  font-size: 1rem;
  text-align: center;
  color: #333;
  width: 100%;
`;

const PokemonNumber = styled.p`
  font-family: 'PokemonClassic';
  font-size: 0.6rem;
  text-align: center;
  color: #333;
  width: 100%;
`;

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

const ShinyVersion = styled.div`
  font-family: 'PokemonClassic';
  font-size: 1rem;
  color: #2d2927;
  text-align: center;
`;

const StatusCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 50%;
  padding: 1rem;
  border-radius: 16px;
  background-color: #00000044;
`;

const Status = styled.div`
  padding: 4px 10px;
  background: rgba(255, 255, 255, 0.8);
  color: #000;
  border-radius: 4px;
  font-family: 'PokemonClassic';
  font-size: 0.8rem;
`;

const PokemonImgStyle: React.CSSProperties = {
  width: '20%',
  objectFit: 'contain',
};

export const DetailsWrapper = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { pokemonDetails } = useFetchPokemonDetails(Number(id) || 1);

  if (!pokemonDetails) {
    return <Loading />;
  }

  console.log(pokemonDetails);

  const hasTwoTypes = pokemonDetails.types.length > 1;

  const handleTypeClick = (typeIndex: number) => {
    navigate('/', {
      state: { type: pokemonDetails.types[typeIndex].type.name },
    });
  };

  const getTypeColor = (typeIndex: number) => {
    const type = pokemonDetails.types[typeIndex].type.name;
    return theme.pokemonTypesColors[type as keyof PokemonTypeColors];
  };

  return (
    <Wrapper>
      <ButtonsContainer>
        <GoBackButton onClick={() => navigate(-1)}>Voltar</GoBackButton>
      </ButtonsContainer>
      <DetailsCardsWrapper>
        <DetailsCard>
          <PokemonImage
            src={
              pokemonDetails.sprites.other['official-artwork'].front_default ||
              whosThatPokemon
            }
            alt={pokemonDetails.name}
            style={PokemonImgStyle}
          />
          <PokemonName>{pokemonDetails.name}</PokemonName>
          <PokemonNumber>{pokemonDetails.id}</PokemonNumber>
          <PokemonTypeContainer>
            <PokemonType
              color={getTypeColor(0)}
              onClick={() => handleTypeClick(0)}
            >
              <p>{pokemonDetails.types[0].type.name}</p>
            </PokemonType>
            {hasTwoTypes && (
              <PokemonType
                color={getTypeColor(1)}
                onClick={() => handleTypeClick(1)}
              >
                <p>{pokemonDetails.types[1].type.name}</p>
              </PokemonType>
            )}
          </PokemonTypeContainer>
        </DetailsCard>
        <ShinyDetailsCard>
          <PokemonImage
            src={
              pokemonDetails.sprites.other['official-artwork'].front_shiny ||
              whosThatPokemon
            }
            style={PokemonImgStyle}
            alt={pokemonDetails.name}
          />
          <ShinyVersion>Versão Shiny</ShinyVersion>
          <PokemonNumber>{pokemonDetails.id}</PokemonNumber>
        </ShinyDetailsCard>
      </DetailsCardsWrapper>
      <StatusCard>
        {pokemonDetails.stats.map((stat) => (
          <Status key={stat.stat.name}>
            {`${stat.stat.name.replace('-', ' ')}: ${stat.base_stat}`}
          </Status>
        ))}
      </StatusCard>
    </Wrapper>
  );
};
