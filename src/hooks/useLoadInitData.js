import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getPostAPI } from '@services/post-api';
import { initPost } from '@store/post-store';
import { getCategoriesAPI } from '@services/category-api';
import { initCategories } from '@store/category-store';

const useLoadInitData = () => {
  const dispatch = useDispatch();

  /** 초기 데이터 설정
   * Posts, Categories
   */
  useEffect(() => {
    const getInitData = async () => {
      const data = await getPostAPI();
      const categoriesData = await getCategoriesAPI();

      dispatch(initPost(data));
      dispatch(initCategories(categoriesData));
    };

    getInitData();
  }, [dispatch]);
};

export default useLoadInitData;
