import { useEffect, useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import StyledPosts from '@styles/components/home/Posts-styled';
import Header from './Header';
import PostCard from './PostCard';

const Posts = () => {
  const [curPage, setCurPage] = useState(1);
  const [filteredPost, setFilteredPost] = useState([]);

  const clickedCategory = useSelector((state) => state.category.current);
  const posts = useSelector((state) => state.post.items, shallowEqual);

  useEffect(() => {
    const postInCategory = posts
      .filter(
        (post) =>
          post.category === clickedCategory || clickedCategory === '전체글',
      )
      .reverse();

    setFilteredPost(postInCategory);
    setCurPage(1);
  }, [posts, clickedCategory]);

  const clickPageHandler = (clickedPage) => {
    if (clickedPage === curPage) return;

    setCurPage(clickedPage);
  };

  const renderedPost = filteredPost.slice(8 * curPage - 8, 8 * curPage);
  const totPage =
    filteredPost.length % 8 === 0
      ? filteredPost.length / 8
      : filteredPost.length / 8 + 1;
  const pageArray = [];
  for (let i = 1; i <= totPage; i += 1) pageArray.push(i);

  return (
    <StyledPosts>
      {/* Main Header */}
      <Header />

      {/* Main Content */}
      <div className='main-content'>
        {renderedPost.map((post) => (
          <PostCard key={post.id} post={post} />
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
    </StyledPosts>
  );
};

export default Posts;