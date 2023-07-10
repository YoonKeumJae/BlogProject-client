import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';

import StyledCategoryList from '@styles/main/post/detail-post/CategoryList-styled';

const CategoryList = ({ category }) => {
  const [curPage, setCurPage] = useState(1);
  const posts = useSelector((state) => state.post.items);

  const navigation = useNavigate();
  const { postId } = useParams();

  const filterPost = posts.filter((post) => post.category === category);

  const renderedPost = filterPost.slice(8 * curPage - 8, 8 * curPage);
  const totPage = filterPost.length / 8 + 1;
  const pageArray = [];
  for (let i = 1; i <= totPage; i += 1) pageArray.push(i);

  const onClickPostHandler = useCallback(
    (id) => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      navigation(`/post/${id}`);
    },
    [navigation],
  );

  return (
    <StyledCategoryList>
      {/* Category title */}
      <div className='category-name'>
        <span className='selected-category'>{category}</span>
        <span className='category-class'>카테고리 글</span>
      </div>

      {/* Post Item List */}
      <div className='category-item-list'>
        {renderedPost.map((item) => (
          <div
            key={item.id}
            className={`category-item ${item.id === postId ? 'selected' : ''}`}
          >
            <div
              className='item-left'
              onClick={() => onClickPostHandler(item.id)}
            >
              <span className='item-title'>{item.title}</span>
              <span>{`(${item.comment.length})`}</span>
            </div>
            <div className='item-right'>{item.date}</div>
          </div>
        ))}

        {/* Category paging */}
        <div className='category-page-container'>
          {pageArray.map((page, index) => (
            <button
              key={index}
              onClick={() => setCurPage(page)}
              className={`${page === curPage ? 'selected-category-page' : ''}`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </StyledCategoryList>
  );
};

export default CategoryList;
