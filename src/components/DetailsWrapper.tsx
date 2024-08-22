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

const CardBase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  border-radius: 16px;
  background-color: #00000044;
`;

const DetailsCard = styled(CardBase)`
  background-color: #00000044;
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

const NameNumberWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 0.5rem;
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

const SpritesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

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

export const DetailsWrapper = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { pokemonDetails } = useFetchPokemonDetails(Number(id) || 1);

  if (!pokemonDetails) {
    return <Loading />;
  }

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
      <NameNumberWrapper>
        <PokemonNumber>#{pokemonDetails.id}</PokemonNumber>
        <PokemonName>{pokemonDetails.name}</PokemonName>
      </NameNumberWrapper>
      <SpritesWrapper>
        <PokemonImage
          src={
            pokemonDetails.sprites.other['official-artwork'].front_default ||
            whosThatPokemon
          }
          alt={pokemonDetails.name}
          style={PokemonImgStyle}
        />
        <PokemonImage
          src={
            pokemonDetails.sprites.other['official-artwork'].front_shiny ||
            whosThatPokemon
          }
          style={PokemonShinyImgStyle}
          alt={pokemonDetails.name}
        />
      </SpritesWrapper>
      <DetailsCard>
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
