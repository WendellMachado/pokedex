import styled from 'styled-components';

const Status = styled.div`
  padding: 4px 10px;
  background: rgba(255, 255, 255, 0.8);
  color: #000;
  border-radius: 4px;
  font-family: 'PokemonClassic';
  font-size: 0.8rem;
`;

export const StatItem = ({ stat }: any) => {
  return (
    <Status>{`${stat.stat.name.replace('-', ' ')}: ${stat.base_stat}`}</Status>
  );
};
