import { useCallback, useState } from 'react';

import { DEFAULT } from '@constants/category-mode';
import StyledCategoryForm from '@styles/components/home/CategoryForm-styled';

const CategoryForm = ({ onCreateCategory, onChangeMode }) => {
  const [enteredCategory, setEnteredCategory] = useState('');

  const onChangeCategory = (e) => setEnteredCategory(e.target.value);

  const createCategoryHandler = useCallback(
    async (e) => {
      e.preventDefault();
      onCreateCategory(enteredCategory);
    },
    [enteredCategory, onCreateCategory],
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
