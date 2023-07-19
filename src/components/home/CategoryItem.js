import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { DEFAULT, SETTING, UPDATE } from '@constants/category-mode';
import { getPostAPI } from '@services/post-api';
import { replacePost } from '@store/post-store';
import { changeCategory } from '@store/category-store';

const CategoryItem = ({
  id,
  name,
  count,
  clicked,
  modeState,
  setUpdateMode,
  updateCategory,
  deleteCategory,
}) => {
  const [inputItem, setInputItem] = useState(name);

  const filterMode = useSelector((state) => state.post.filterMode);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const { mode, selectedId } = modeState;

  const clickCategoryHandler = useCallback(async () => {
    if (mode === UPDATE) return;
    if (filterMode === 'search') {
      const postsData = await getPostAPI();

      await dispatch(replacePost({ postsData, mode: 'category' }));
    }

    dispatch(changeCategory(name));
    navigation(`/search?category=${name}`);
  }, [navigation, dispatch, name, mode, filterMode]);

  const changeItemHandler = (e) => setInputItem(e.target.value);

  const clickUpdateModeHandler = () =>
    setUpdateMode({ mode: UPDATE, selectedId: id });

  const submitCategoryHandler = useCallback(
    (e) => {
      e.preventDefault();

      if (inputItem.trim().length === 0) {
        setUpdateMode({ mode: DEFAULT, selectedId: '' });
        return;
      }

      if (inputItem.trim().length > 7) {
        alert('카테고리명의 길이를 7이하로 설정해주세요.');
        return;
      }

      setUpdateMode({ mode: DEFAULT, selectedId: '' });
      updateCategory({ id, name, count, updatedName: inputItem });
    },
    [setUpdateMode, updateCategory, id, name, count, inputItem],
  );

  return (
    <div className='category'>
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
          {mode === UPDATE && id === selectedId && (
            <form className='item-form' onSubmit={submitCategoryHandler}>
              <input
                value={inputItem}
                onChange={changeItemHandler}
                placeholder='카테고리를 입력해주세요.'
              />
              <button>수정</button>
            </form>
          )}
        </div>

        {clicked && mode !== UPDATE && filterMode === 'category' && (
          <div className='underline' />
        )}
      </div>
      {mode === SETTING && (
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
            onClick={() => deleteCategory(id)}
          >
            삭제
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryItem;
