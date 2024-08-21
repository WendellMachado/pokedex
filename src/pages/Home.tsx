import { useLocation } from 'react-router-dom';
import { Header } from '../components/Header';
import { SearchResults } from '../components/SearchResults';
import { SearchProvider } from '../context/SearchContext';

export const Home = () => {
  const location = useLocation();
  const type = location.state?.type;
  return (
    <>
      <SearchProvider initialType={type?.toLowerCase() || ''}>
        <Header />
        <SearchResults />
      </SearchProvider>
    </>
  );
};
