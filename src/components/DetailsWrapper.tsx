import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import whosThatPokemon from '../assets/whosthatpokemon.png';

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

const ShinyDetailsCard = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  align-self: stretch;
  border-radius: 16px;
  border: 4px solid #fad958;
  background: linear-gradient(217deg, #ede9c7 14.29%, #e1c863 95.26%);
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

  console.log(id);
  return (
    <Wrapper>
      <ButtonsContainer>
        <GoBackButton onClick={() => navigate(-1)}>Voltar</GoBackButton>
      </ButtonsContainer>
      <DetailsCardsWrapper>
        <DetailsCard>
          {' '}
          <img
            src={
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png'
            }
            alt={'name'}
            onError={(e) => {
              e.currentTarget.src = whosThatPokemon;
            }}
          />
          <PokemonName>Chikorita</PokemonName>
          <PokemonNumber>{'#0152'}</PokemonNumber>
          <PokemonTypeContainer>
            <PokemonType>
              <p>Grass</p>
            </PokemonType>
            <PokemonType>
              <p>Grass</p>
            </PokemonType>
          </PokemonTypeContainer>
        </DetailsCard>
        <ShinyDetailsCard>
          {' '}
          <img
            src={
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/152.png'
            }
            alt={'name'}
            onError={(e) => {
              e.currentTarget.src = whosThatPokemon;
            }}
          />
          <ShinyVersion>Versão Shiny</ShinyVersion>
        </ShinyDetailsCard>
      </DetailsCardsWrapper>
      <StatusCard>
        <Status>HP: 45</Status>
        <Status>Ataque: 49</Status>
        <Status>Defesa: 65</Status>
        <Status>Ataque Especial: 49</Status>
        <Status>Defesa Especial: 65</Status>
        <Status>Velocidade: 45</Status>
      </StatusCard>
    </Wrapper>
  );
};
