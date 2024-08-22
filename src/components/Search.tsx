import styled from 'styled-components';
import arrowIcon from '../assets/arrow.png';
import searchGlass from '../assets/searchGlass.png';
import { theme } from '../themes/theme';
import { useSearchContext } from '../context/SearchContext';
import debounce from 'lodash.debounce';
import { useCallback, useEffect } from 'react';
import { useFetchPokemonTypes } from '../hooks/useFetchAllPokemonTypes';
import { useTranslation } from 'react-i18next';

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
  const { setSearchTerm, searchTerm, selectedType, setSelectedType } =
    useSearchContext();
  const { types, loading: typesLoading } = useFetchPokemonTypes();
  const { t } = useTranslation();

  const debouncedSetSearchTerm = useCallback(
    debounce((value: string) => {
      setSearchTerm(value);
    }, 20),
    [],
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSetSearchTerm(e.target.value);
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(e.target.value);
  };

  useEffect(() => {
    return () => {
      debouncedSetSearchTerm.cancel();
    };
  }, [debouncedSetSearchTerm]);

  return (
    <ActionWrapper>
      <SearchInput
        placeholder={t('searchPlaceholder')}
        type="text"
        id="searchInput"
        onChange={(e) => handleInputChange(e)}
        value={searchTerm}
      />
      <SelectTypeInput
        id="typeFilter"
        onChange={(e) => handleTypeChange(e)}
        value={selectedType}
      >
        <option value="">{t('typeFilterPlaceholder')}</option>
        {typesLoading ? (
          <option>Carregando...</option>
        ) : (
          types.map((type) => (
            <option key={type} value={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </option>
          ))
        )}
      </SelectTypeInput>
    </ActionWrapper>
  );
};
