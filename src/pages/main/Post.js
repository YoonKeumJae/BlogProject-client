import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';

import { getPostAPI } from '@services/post-api';
import { initPost } from '@store/post-store';
import StyledPost from '@styles/main/Post-styled';
import Header from './main-content/Header';
import PostItem from './main-content/PostItem';

const Post = () => {
  const [curPage, setCurPage] = useState(1);
  const [filteredPost, setFilteredPost] = useState([]);

  const clickedCategory = useSelector((state) => state.category.current);
  const posts = useSelector((state) => state.post.items);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const getPost = async () => {
      const data = await getPostAPI();

      dispatch(initPost(data));
    };

    if (location.search.length === 0) getPost();
  }, [location, dispatch]);

  useEffect(() => {
    const postInCategory = posts.filter(
      (content) =>
        content.category === clickedCategory || clickedCategory === '전체글',
    );

    setFilteredPost(postInCategory);
    setCurPage(1);
  }, [posts, clickedCategory]);

  const clickPageHandler = useCallback(
    (clickedPage) => {
      if (clickedPage === curPage) return;

      setCurPage(clickedPage);
    },
    [curPage],
  );

  const renderedPost = filteredPost.slice(8 * curPage - 8, 8 * curPage);
  const totPage = filteredPost.length / 8 + 1;
  const pageArray = [];
  for (let i = 1; i <= totPage; i += 1) pageArray.push(i);

  return (
    <StyledPost>
      {/* Main Header */}
      <Header />

      {/* Main Content */}
      <div className='main-content'>
        {renderedPost.map((post) => (
          <PostItem key={post.id} post={post} />
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
    </StyledPost>
  );
};

export default Post;
