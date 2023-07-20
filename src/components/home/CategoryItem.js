import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { DEFAULT, SETTING, UPDATE } from '@constants/category-mode';
import { deleteCategoryAPI } from '@services/category-api';
import { changeCategory, deleteCategory } from '@store/category-store';
import StyledCategoryItem from '@styles/components/home/CategoryItem-styled';
import { convertListToQueryURI } from '@utils/convert';

const CategoryItem = ({
  id,
  name,
  count,
  mode,
  onChangeMode,
  onUpdateCategory,
}) => {
  const [enteredCategory, setEnteredCategory] = useState(name);

  const filterMode = useSelector((state) => state.post.filterMode);
  const clickedCategory = useSelector((state) => state.category.current);

  const [searchParams] = useSearchParams();
  const queryList = [...searchParams];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { current, id: selectedId } = mode;

  const changeItemHandler = (e) => setEnteredCategory(e.target.value);
  const clickUpdateModeHandler = () => onChangeMode(UPDATE, id);

  const clickCategoryHandler = () => {
    if (name === '전체글') {
      navigate('/');
      return;
    }

    const queryURI = convertListToQueryURI(queryList, ['category', name]);
    navigate(queryURI);

    dispatch(changeCategory(name));
    onChangeMode(DEFAULT);
  };

  const updateCategoryHandler = useCallback(
    async (e) => {
      e.preventDefault();

      const updateForm = {
        id,
        name,
        enteredCategory,
        count,
      };

      onUpdateCategory(updateForm);
    },
    [onUpdateCategory, id, name, count, enteredCategory],
  );

  const deleteCategoryHandler = useCallback(async () => {
    if (count > 0) {
      alert('존재하는 게시글이 있습니다.');
      return;
    }

    const isDelete = window.confirm('정말 삭제하시겠습니까?');

    if (isDelete) {
      dispatch(deleteCategory(id));
      onChangeMode(DEFAULT);
      navigate('/');
      await deleteCategoryAPI(id);
    }
  }, [navigate, dispatch, count, onChangeMode, id]);

  const isClicked = clickedCategory === name;

  return (
    <StyledCategoryItem>
      <div className='item'>
        <div className='item-button' onClick={clickCategoryHandler}>
          <svg
            width='15'
            height='18'
            viewBox='0 0 15 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1 2.6V15.4C1 15.8243 1.1712 16.2313 1.47595 16.5314C1.7807 16.8314 2.19402 17 2.625 17H12.375C12.806 17 13.2193 16.8314 13.524 16.5314C13.8288 16.2313 14 15.8243 14 15.4V6.0736C14 5.86045 13.9567 5.64945 13.8727 5.453C13.7887 5.25654 13.6657 5.07859 13.5109 4.9296L9.90338 1.456C9.59979 1.16373 9.19209 1.00005 8.7675 1H2.625C2.19402 1 1.7807 1.16857 1.47595 1.46863C1.1712 1.76869 1 2.17565 1 2.6Z'
              stroke='#D9D9D9'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M9.125 1V4.2C9.125 4.62435 9.29621 5.03131 9.60095 5.33137C9.9057 5.63143 10.319 5.8 10.75 5.8H14'
              stroke='#D9D9D9'
              strokeWidth='2'
              strokeLinejoin='round'
            />
          </svg>
          {id !== selectedId && (
            <>
              <span className='item-name'>{name}</span>
              <span className='item-count'>({count})</span>
            </>
          )}
          {current === UPDATE && id === selectedId && (
            <form className='item-form' onSubmit={updateCategoryHandler}>
              <input
                value={enteredCategory}
                onChange={changeItemHandler}
                placeholder='카테고리를 입력해주세요.'
              />
              <button>수정</button>
            </form>
          )}
        </div>

        {isClicked && current !== UPDATE && filterMode === 'category' && (
          <div className='underline' />
        )}
      </div>
      {current === SETTING && (
        <div className='setting-option'>
          <button
            type='button'
            className='item-update'
            onClick={clickUpdateModeHandler}
          >
            수정
          </button>
          <button
            type='button'
            className='item-delete'
            onClick={deleteCategoryHandler}
          >
            삭제
          </button>
        </div>
      )}
    </StyledCategoryItem>
  );
};

export default CategoryItem;
