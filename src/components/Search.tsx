import styled from 'styled-components';
import arrowIcon from '../assets/arrow.png';
import searchGlass from '../assets/searchGlass.png';

const ActionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const SearchInput = styled.input`
  margin-top: 12px;
  color: #000000cc;
  background: #ffffff no-repeat left 5px center;
  padding: 6px;
  width: 25%;
  background-image: url(${searchGlass});
  padding-left: 32px;
`;

const SelectTypeInput = styled.select`
  margin-top: 12px;
  color: #000000cc;
  background: #ffffff no-repeat right 5px center;
  background-size: 16px 16px;
  padding: 6px;
  width: 10%;
  cursor: pointer;
  appearance: none;
  background-image: url(${arrowIcon});
`;

export const Search = () => {
  return (
    <ActionWrapper>
      <SearchInput
        placeholder="Busque por nome ou nº"
        type="text"
        id="searchInput"
      />
      <SelectTypeInput id="typeFilter">
        <option value="">{'Busque por tipo'}</option>
        <option value="Normal">Normal</option>
        <option value="Fighting">Lutador</option>
      </SelectTypeInput>
    </ActionWrapper>
  );
};
