import { useState } from 'react';

import StyledPosts from '@styles/components/home/Posts-styled';
import { filterPostOnPage, makePageArray } from '@utils/post';
import Header from './Header';
import PostCard from './PostCard';

const VIEW_POST = 8;

const Posts = ({ posts }) => {
  const [curPage, setCurPage] = useState(1);

  const clickPageHandler = (clickedPage) => {
    if (clickedPage === curPage) return;

    setCurPage(clickedPage);
  };

  const renderedPost = filterPostOnPage(posts, curPage, VIEW_POST);
  const pages = makePageArray(posts, VIEW_POST);

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
        {pages.map((page) => (
          <button
            key={page}
            className={`${page === curPage ? 'clicked-page' : ''}`}
            onClick={() => clickPageHandler(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </StyledPosts>
  );
};

export default Posts;
