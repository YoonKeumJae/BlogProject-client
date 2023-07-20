import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { DEFAULT } from '@constants/category-mode';
import { createCategoryAPI } from '@services/category-api';
import { createCategory } from '@store/category-store';
import StyledCategoryForm from '@styles/components/home/CategoryForm-styled';

const CategoryForm = ({ onChangeMode }) => {
  const [enteredCategory, setEnteredCategory] = useState('');
  const dispatch = useDispatch();

  const onChangeCategory = (e) => setEnteredCategory(e.target.value);

  const createCategoryHandler = useCallback(
    async (e) => {
      e.preventDefault();

      if (enteredCategory.trim().length === 0) {
        onChangeMode(DEFAULT);
        return;
      }

      const newItem = {
        id: `category-${Math.floor(Math.random() * 65565)}`,
        name: enteredCategory,
        count: 0,
      };

      dispatch(createCategory(newItem));
      await createCategoryAPI(newItem);
      setEnteredCategory('');
      onChangeMode(DEFAULT);
    },
    [dispatch, onChangeMode, enteredCategory],
  );

  return (
    <StyledCategoryForm onSubmit={createCategoryHandler}>
      <input
        className='category-input'
        value={enteredCategory}
        onChange={onChangeCategory}
        placeholder='카테고리를 입력해주세요.'
      />
      <button type='submit'>추가</button>
      <button type='button' onClick={() => onChangeMode(DEFAULT)}>
        취소
      </button>
    </StyledCategoryForm>
  );
};

export default CategoryForm;
