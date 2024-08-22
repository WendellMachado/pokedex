import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import brazilFlag from '../assets/brazil.png';
import usFlag from '../assets/us.png';
import spainFlag from '../assets/spain.png';

const FlagButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0 0.5rem;

  img {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const LanguageSwitcherWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <LanguageSwitcherWrapper>
      <FlagButton>
        <img
          src={brazilFlag}
          onClick={() => changeLanguage('pt')}
          alt="Português"
        />
      </FlagButton>
      <FlagButton>
        <img src={usFlag} onClick={() => changeLanguage('en')} alt="English" />
      </FlagButton>
      <FlagButton>
        <img
          src={spainFlag}
          onClick={() => changeLanguage('es')}
          alt="Español"
        />
      </FlagButton>
    </LanguageSwitcherWrapper>
  );
};
