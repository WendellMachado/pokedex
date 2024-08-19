import { Header } from '../components/Header';
import { SearchResults } from '../components/SearchResults';
import { SearchProvider } from '../context/SearchContext';

export const Home = () => {
  return (
    <>
      <SearchProvider>
        <Header />
        <SearchResults />
      </SearchProvider>
    </>
  );
};
