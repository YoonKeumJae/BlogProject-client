import StyledPagination from '@styles/components/common/Pagination-styled';

const Pagination = ({ pages, curPage, onSetPage }) => {
  const clickPageHandler = (clickedPage) => {
    if (clickedPage === curPage) return;

    onSetPage(clickedPage);
  };

  return (
    <StyledPagination>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => clickPageHandler(page)}
          className={`${page === curPage ? 'clicked-page' : ''}`}
        >
          {page}
        </button>
      ))}
    </StyledPagination>
  );
};

export default Pagination;
