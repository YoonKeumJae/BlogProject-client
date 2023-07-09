import { useCallback, useEffect, useState } from 'react';

import { getContent } from '@services/content';
import StyledContent from '@styles/main/Content-styled';
import Header from './main-content/Header';
import ContentItem from './main-content/ContentItem';

const Content = () => {
  const [curPage, setCurPage] = useState(1);
  const [contents, setContents] = useState([]);
  const [renderedContents, setRenderedContents] = useState([]);

  useEffect(() => {
    const getContentData = async () => {
      const data = await getContent();

      setContents(data);
    };

    getContentData();
  }, []);

  useEffect(() => {
    const contentsSlice = contents.slice(8 * curPage - 8, 8 * curPage);

    setRenderedContents(contentsSlice);
  }, [contents, curPage]);

  const clickPageHandler = useCallback(
    (clickedPage) => {
      if (clickedPage === curPage) return;

      setCurPage(clickedPage);
    },
    [curPage],
  );

  const totPage = contents.length / 8 + 1;
  const pageArray = [];
  for (let i = 1; i <= totPage; i += 1) pageArray.push(i);

  return (
    <StyledContent>
      {/* Main Header */}
      <Header />

      {/* Main Content */}
      <div className='main-content'>
        {renderedContents.map((content) => (
          <ContentItem key={content.id} content={content} />
        ))}
      </div>

      {/* Content Paging */}
      <div className='page-box'>
        {pageArray.map((page) => (
          <span
            key={page}
            className={`${page === curPage ? 'clicked-page' : ''}`}
            onClick={() => clickPageHandler(page)}
          >
            {page}
          </span>
        ))}
      </div>
    </StyledContent>
  );
};

export default Content;
