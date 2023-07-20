import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { DEFAULT, SETTING, CREATE } from '@constants/category-mode';
import { createCategoryAPI, updateCategoryAPI } from '@services/category-api';
import {
  changeCategory,
  createCategory,
  updateCategory,
} from '@store/category-store';
import { updatePostCategory } from '@store/post-store';
import StyledCategory from '@styles/components/home/Category-styled';
import CategoryItem from './CategoryItem';
import CategoryForm from './CategoryForm';

const Category = ({ categories }) => {
  const [mode, setMode] = useState({
    current: DEFAULT,
    id: '',
  });

  const dispatch = useDispatch();

  const onChangeMode = (type, selectedId = '') =>
    setMode({ current: type, id: selectedId });

  const clickSettingHandler = () =>
    mode.current === SETTING ? onChangeMode(DEFAULT) : onChangeMode(SETTING);

  const isValidateCategory = useCallback(
    (enteredCategory) => {
      if (enteredCategory.trim().length === 0) {
        alert('카테고리명을 입력해주세요.');
        return false;
      }

      if (enteredCategory.trim().length > 7) {
        alert('카테고리명의 길이를 7이하로 설정해주세요.');
        return false;
      }

      const isDuplicate = categories.some(
        (category) => category.name === enteredCategory,
      );

      if (isDuplicate) {
        alert('존재하는 카테고리입니다.');
        return false;
      }

      return true;
    },
    [categories],
  );

  const createCategoryHandler = useCallback(
    async (enteredCategory) => {
      const isValidate = isValidateCategory(enteredCategory);

      if (!isValidate) return;

      const newItem = {
        id: `category-${Math.floor(Math.random() * 65565)}`,
        name: enteredCategory,
        count: 0,
      };

      dispatch(createCategory(newItem));
      await createCategoryAPI(newItem);
      onChangeMode(DEFAULT);
    },
    [dispatch, isValidateCategory],
  );

  const updateCategoryHandler = useCallback(
    async (updateForm) => {
      const { id, name, enteredCategory, count } = updateForm;
      const isValidate = isValidateCategory(enteredCategory);

      if (!isValidate) return;

      dispatch(updateCategory({ id, name: enteredCategory, count }));
      dispatch(updatePostCategory({ name, enteredCategory }));
      dispatch(changeCategory(enteredCategory));
      await updateCategoryAPI({ id, name: enteredCategory, count });
      onChangeMode(DEFAULT);
    },
    [dispatch, isValidateCategory],
  );

  return (
    <StyledCategory>
      {/* Category Header */}
      <div className='head'>
        <div className='left'>
          <span>category</span>
          <button
            type='button'
            className='setting-button'
            onClick={clickSettingHandler}
          >
            <svg
              width='16'
              height='16'
              viewBox='0 0 20 22'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M18.0435 11.66C17.8831 11.4775 17.7947 11.2429 17.7947 11C17.7947 10.7571 17.8831 10.5225 18.0435 10.34L19.3235 8.89999C19.4645 8.74266 19.5521 8.54469 19.5736 8.33449C19.5952 8.1243 19.5496 7.91267 19.4435 7.72999L17.4435 4.26999C17.3384 4.08751 17.1783 3.94286 16.9862 3.85667C16.7941 3.77048 16.5796 3.74714 16.3735 3.78999L14.4935 4.16999C14.2542 4.21942 14.0052 4.17958 13.7933 4.05799C13.5815 3.9364 13.4214 3.74147 13.3435 3.50999L12.7335 1.67999C12.6664 1.48137 12.5386 1.30885 12.3681 1.18683C12.1976 1.06481 11.9931 0.999446 11.7835 0.999987H7.78345C7.56538 0.988605 7.34959 1.04891 7.16902 1.1717C6.98845 1.29449 6.85303 1.47301 6.78345 1.67999L6.22345 3.50999C6.14545 3.74147 5.98542 3.9364 5.77356 4.05799C5.5617 4.17958 5.31267 4.21942 5.07345 4.16999L3.14345 3.78999C2.948 3.76237 2.74875 3.79321 2.5708 3.87863C2.39285 3.96404 2.24415 4.10021 2.14345 4.26999L0.143451 7.72999C0.034611 7.91064 -0.0143269 8.12107 0.00363355 8.33121C0.021594 8.54135 0.105533 8.74043 0.243451 8.89999L1.51345 10.34C1.67377 10.5225 1.76219 10.7571 1.76219 11C1.76219 11.2429 1.67377 11.4775 1.51345 11.66L0.243451 13.1C0.105533 13.2595 0.021594 13.4586 0.00363355 13.6688C-0.0143269 13.8789 0.034611 14.0893 0.143451 14.27L2.14345 17.73C2.24855 17.9125 2.40857 18.0571 2.6007 18.1433C2.79284 18.2295 3.00728 18.2528 3.21345 18.21L5.09345 17.83C5.33267 17.7806 5.5817 17.8204 5.79356 17.942C6.00542 18.0636 6.16545 18.2585 6.24345 18.49L6.85345 20.32C6.92303 20.527 7.05845 20.7055 7.23902 20.8283C7.41959 20.9511 7.63538 21.0114 7.85345 21H11.8535C12.0631 21.0005 12.2676 20.9352 12.4381 20.8131C12.6086 20.6911 12.7364 20.5186 12.8035 20.32L13.4135 18.49C13.4915 18.2585 13.6515 18.0636 13.8633 17.942C14.0752 17.8204 14.3242 17.7806 14.5635 17.83L16.4435 18.21C16.6496 18.2528 16.8641 18.2295 17.0562 18.1433C17.2483 18.0571 17.4084 17.9125 17.5135 17.73L19.5135 14.27C19.6196 14.0873 19.6652 13.8757 19.6436 13.6655C19.6221 13.4553 19.5345 13.2573 19.3935 13.1L18.0435 11.66ZM16.5535 13L17.3535 13.9L16.0735 16.12L14.8935 15.88C14.1732 15.7328 13.424 15.8551 12.788 16.2238C12.1521 16.5925 11.6736 17.1818 11.4435 17.88L11.0635 19H8.50345L8.14345 17.86C7.91331 17.1618 7.43483 16.5725 6.79886 16.2038C6.16288 15.8351 5.41367 15.7128 4.69345 15.86L3.51345 16.1L2.21345 13.89L3.01345 12.99C3.50541 12.44 3.77738 11.7279 3.77738 10.99C3.77738 10.2521 3.50541 9.54001 3.01345 8.98999L2.21345 8.08999L3.49345 5.88999L4.67345 6.12999C5.39367 6.27721 6.14288 6.15487 6.77886 5.78619C7.41483 5.4175 7.89331 4.82815 8.12345 4.12999L8.50345 2.99999H11.0635L11.4435 4.13999C11.6736 4.83815 12.1521 5.4275 12.788 5.79619C13.424 6.16487 14.1732 6.28721 14.8935 6.13999L16.0735 5.89999L17.3535 8.11999L16.5535 9.01999C16.067 9.56875 15.7984 10.2767 15.7984 11.01C15.7984 11.7433 16.067 12.4512 16.5535 13ZM9.78345 6.99999C8.99233 6.99999 8.21897 7.23458 7.56117 7.67411C6.90337 8.11363 6.39068 8.73835 6.08793 9.46925C5.78518 10.2002 5.70597 11.0044 5.86031 11.7803C6.01465 12.5563 6.39561 13.269 6.95502 13.8284C7.51443 14.3878 8.22717 14.7688 9.00309 14.9231C9.77901 15.0775 10.5833 14.9983 11.3142 14.6955C12.0451 14.3928 12.6698 13.8801 13.1093 13.2223C13.5489 12.5645 13.7835 11.7911 13.7835 11C13.7835 9.93912 13.362 8.9217 12.6119 8.17156C11.8617 7.42141 10.8443 6.99999 9.78345 6.99999ZM9.78345 13C9.38789 13 9.00121 12.8827 8.67231 12.6629C8.34341 12.4432 8.08707 12.1308 7.93569 11.7654C7.78432 11.3999 7.74471 10.9978 7.82188 10.6098C7.89905 10.2218 8.08953 9.86548 8.36924 9.58577C8.64894 9.30607 9.00531 9.11559 9.39327 9.03842C9.78123 8.96125 10.1834 9.00085 10.5489 9.15223C10.9143 9.30361 11.2267 9.55996 11.4464 9.88886C11.6662 10.2178 11.7835 10.6045 11.7835 11C11.7835 11.5553 11.5518 12.0849 11.1533 12.4834C10.7548 12.8819 10.2252 13.1135 9.6699 13.1135H9.78345Z'
                fill='currentColor'
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Category List */}
      <div className='items'>
        {categories.map((category, index) => (
          <CategoryItem
            key={category.id}
            id={category.id}
            name={category.name}
            count={category.count}
            mode={index !== 0 && mode}
            onChangeMode={onChangeMode}
            onUpdateCategory={updateCategoryHandler}
          />
        ))}
      </div>
      {mode.current === CREATE && (
        <CategoryForm
          onChangeMode={onChangeMode}
          onCreateCategory={createCategoryHandler}
        />
      )}
      {mode.current !== CREATE && (
        <button
          type='button'
          className='item-create'
          onClick={() => onChangeMode(CREATE)}
        >
          카테고리 추가하기
        </button>
      )}
    </StyledCategory>
  );
};

export default Category;
