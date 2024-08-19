import styled from 'styled-components';
import arrowIcon from '../assets/arrow.png';
import searchGlass from '../assets/searchGlass.png';
import { theme } from '../themes/theme';
import { useSearchContext } from '../context/SearchContext';

const ActionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media (max-width: ${theme.mediaQueryBreakpoints.tablet}) {
    flex-direction: column;
    gap: 15px;
    margin-bottom: 20px;
  }
`;

const SearchInput = styled.input`
  margin-top: 12px;
  color: #000000cc;
  background: #ffffff no-repeat left 5px center;
  padding: 12px;
  min-width: 25%;
  background-image: url(${searchGlass});
  padding-left: 32px;
  border-radius: 4px;

  @media (max-width: ${theme.mediaQueryBreakpoints.tablet}) {
    width: 80%;
  }
`;

const SelectTypeInput = styled.select`
  margin-top: 12px;
  color: #000000cc;
  background: #ffffff no-repeat right 5px center;
  background-size: 16px 16px;
  padding: 12px;
  min-width: 10%;
  padding-right: 32px;
  cursor: pointer;
  appearance: none;
  background-image: url(${arrowIcon});
  border-radius: 4px;

  @media (max-width: ${theme.mediaQueryBreakpoints.tablet}) {
    width: 80%;
  }
`;

export const Search = () => {
  const { setSearchTerm, searchTerm } = useSearchContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <ActionWrapper>
      <SearchInput
        placeholder="Busque por nome ou nº"
        type="text"
        id="searchInput"
        onChange={(e) => handleInputChange(e)}
        value={searchTerm}
      />
      <SelectTypeInput id="typeFilter">
        <option value="">{'Busque por tipo'}</option>
        <option value="Normal">Normal</option>
        <option value="Fighting">Lutador</option>
      </SelectTypeInput>
    </ActionWrapper>
  );
};
