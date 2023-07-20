import { useEffect, useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';

import Pagenaition from '@components/common/Pagination';
import StyledCategoryList from '@styles/components/detail/CategoryList-styled';
import { filterPostOnPage, makePageArray } from '@utils/post';

const VIEW_POST = 4;

const CategoryList = ({ category }) => {
  const [curPage, setCurPage] = useState(1);
  const posts = useSelector((state) => state.post.items, shallowEqual);

  const navigation = useNavigate();
  const { postId } = useParams();

  useEffect(() => {
    const selectedPostPage =
      posts
        .filter((post) => post.category === category)
        .reverse()
        .findIndex((post) => post.id === postId) + 1;

    const calculatedPostPage =
      selectedPostPage % 4 === 0
        ? selectedPostPage / 4
        : selectedPostPage / 4 + 1;

    setCurPage(Math.floor(calculatedPostPage));
  }, [category, posts, postId]);

  const onClickPostHandler = (id) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigation(`/post/${id}`);
  };

  const filterPost = posts
    .filter((post) => post.category === category)
    .reverse();

  const renderedPost = filterPostOnPage(filterPost, curPage, VIEW_POST);
  const pages = makePageArray(filterPost, VIEW_POST);

  return (
    <StyledCategoryList>
      {/* Category title */}
      <div className='category-name'>
        <span className='selected-category'>{category}</span>
        <span className='category-class'>카테고리 글</span>
      </div>

      {/* Post Item List */}
      <div className='category-item-list'>
        {renderedPost.map((item) => {
          const commentCount =
            item.comment.length !== 0 ? `(${item.comment.length})` : '';

          return (
            <div
              key={item.id}
              className={`category-item ${
                item.id === postId ? 'selected' : ''
              }`}
            >
              <div
                className='item-left'
                onClick={() => onClickPostHandler(item.id)}
              >
                <span className='item-title'>{item.title}</span>
                <span>{commentCount}</span>
              </div>
              <div className='item-right'>{item.date}</div>
            </div>
          );
        })}

        {/* Category List Paging */}
        <Pagenaition pages={pages} curPage={curPage} onSetPage={setCurPage} />
      </div>
    </StyledCategoryList>
  );
};

export default CategoryList;
