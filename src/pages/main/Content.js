import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPostAPI } from '@services/post-api';
import { initPost } from '@store/post-store';
import StyledContent from '@styles/main/Content-styled';
import Header from './main-content/Header';
import ContentItem from './main-content/ContentItem';

const Content = () => {
  const [curPage, setCurPage] = useState(1);
  const [filteredContents, setFilteredContents] = useState([]);

  const clickedCategory = useSelector((state) => state.category.current);
  const contents = useSelector((state) => state.post.items);
  const dispatch = useDispatch();

  useEffect(() => {
    const getPost = async () => {
      const data = await getPostAPI();

      dispatch(initPost(data));
    };

    getPost();
  }, [dispatch]);

  useEffect(() => {
    const contentsInCategory = contents.filter(
      (content) =>
        content.category === clickedCategory || clickedCategory === '전체글',
    );

    setFilteredContents(contentsInCategory);
    setCurPage(1);
  }, [contents, clickedCategory]);

  const clickPageHandler = useCallback(
    (clickedPage) => {
      if (clickedPage === curPage) return;

      setCurPage(clickedPage);
    },
    [curPage],
  );

  const renderedContents = filteredContents.slice(8 * curPage - 8, 8 * curPage);
  const totPage = filteredContents.length / 8 + 1;
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
