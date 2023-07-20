import { useState } from 'react';

import Pagenaition from '@components/common/Pagination';
import StyledPosts from '@styles/components/home/Posts-styled';
import { filterPostOnPage, makePageArray } from '@utils/post';
import Header from './Header';
import PostCard from './PostCard';

const VIEW_POST = 8;

const Posts = ({ posts }) => {
  const [curPage, setCurPage] = useState(1);

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

      {/* Posts Paging */}
      <Pagenaition pages={pages} curPage={curPage} onSetPage={setCurPage} />
    </StyledPosts>
  );
};

export default Posts;
