import { useState } from 'react';

import StyledPosts from '@styles/components/home/Posts-styled';
import Header from './Header';
import PostCard from './PostCard';

const Posts = ({ posts }) => {
  const [curPage, setCurPage] = useState(1);

  const clickPageHandler = (clickedPage) => {
    if (clickedPage === curPage) return;

    setCurPage(clickedPage);
  };

  const renderedPost = posts.slice(8 * curPage - 8, 8 * curPage);
  const totPage =
    posts.length % 8 === 0 ? posts.length / 8 : posts.length / 8 + 1;
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
