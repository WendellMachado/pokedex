import styled from 'styled-components';
import { useSearchContext } from '../context/SearchContext';
import { theme } from '../themes/theme';
import { useTranslation } from 'react-i18next';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1.5rem;
  gap: 0.5rem;

  button {
    margin: 0.25rem;
    padding: 0.5rem 1rem;
    background-color: #f14c5c;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    white-space: nowrap;

    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  }

  .active {
    background-color: #ed1f33;
  }

  @media (max-width: ${theme.mediaQueryBreakpoints.tablet}) {
    button {
      padding: 0.4rem 0.8rem;
    }
  }

  @media (max-width: ${theme.mediaQueryBreakpoints.cellphone}) {
    button {
      padding: 0.3rem 0.6rem;
    }
  }
`;

export const Pagination = () => {
  const { t } = useTranslation();

  const pageNumbers = [];
  const totalPageNumbers = 5;
  const { currentPage, setPage, totalPages } = useSearchContext();

  const startPage = Math.max(1, currentPage - Math.floor(totalPageNumbers / 2));
  const endPage = Math.min(totalPages, startPage + totalPageNumbers - 1);

  if (startPage > 1) {
    pageNumbers.push(1);
    if (startPage > 2) pageNumbers.push('...');
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) pageNumbers.push('...');
    pageNumbers.push(totalPages);
  }

  return (
    <PaginationContainer>
      <button
        onClick={() => setPage(currentPage - 10)}
        disabled={currentPage <= 10}
      >
        -10
      </button>
      <button
        onClick={() => setPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {t('previous')}
      </button>
      {pageNumbers.map((number, index) =>
        typeof number === 'number' ? (
          <button
            key={index}
            onClick={() => setPage(number)}
            className={number === currentPage ? 'active' : ''}
          >
            {number}
          </button>
        ) : (
          <span key={index}>...</span>
        ),
      )}
      <button
        onClick={() => setPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {t('next')}
      </button>
      <button
        onClick={() => setPage(currentPage + 10)}
        disabled={currentPage > totalPages - 10}
      >
        +10
      </button>
    </PaginationContainer>
  );
};
