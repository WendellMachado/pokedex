import { useNavigate, useParams } from 'react-router-dom';
import { useFetchPokemonDetails } from '../hooks/useFetchPokemonDetails';
import { Loading } from './Loading';
import { TypeBadge } from './TypeBadge';
import { StatItem } from './StatItem';
import { SpritesWrapper } from './SpritesWrapper';
import { NameNumberWrapper } from './NameNumberWrapper';

import styled from 'styled-components';

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

const StatusCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 50%;
  padding: 1rem;
  border-radius: 16px;
  background-color: #00000044;
`;

export const DetailsWrapper = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { pokemonDetails } = useFetchPokemonDetails(Number(id) || 1);

  if (!pokemonDetails) {
    return <Loading />;
  }

  const hasTwoTypes = pokemonDetails.types.length > 1;

  return (
    <Wrapper>
      <ButtonsContainer>
        <GoBackButton onClick={() => navigate(-1)}>Voltar</GoBackButton>
      </ButtonsContainer>
      <NameNumberWrapper id={pokemonDetails.id} name={pokemonDetails.name} />
      <SpritesWrapper sprites={pokemonDetails.sprites} />
      <TypeBadge
        types={pokemonDetails.types}
        hasTwoTypes={hasTwoTypes}
        handleTypeClick={(index: number) =>
          navigate('/', {
            state: { type: pokemonDetails.types[index].type.name },
          })
        }
      />
      <StatusCard>
        {pokemonDetails.stats.map((stat) => (
          <StatItem key={stat.stat.name} stat={stat} />
        ))}
      </StatusCard>
    </Wrapper>
  );
};
