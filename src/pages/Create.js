import { useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import PostForm from '@components/common/PostForm';
import { assignCategoryAPI } from '@services/category-api';
import { createPostAPI } from '@services/post-api';
import { replaceCategory } from '@store/category-store';
import { createPost } from '@store/post-store';

const CreatePage = () => {
  const categories = useSelector((state) => state.category.items, shallowEqual);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const assignCategoryHandler = useCallback(
    (enteredCategory) =>
      categories.map((category) =>
        category.name === enteredCategory || category.id === '0'
          ? { ...category, count: category.count + 1 }
          : category,
      ),
    [categories],
  );

  const createPostHandler = useCallback(
    async (postForm) => {
      const { category } = postForm;
      const updatedCategory = assignCategoryHandler(category);

      dispatch(createPost(postForm));
      dispatch(replaceCategory(updatedCategory));
      await createPostAPI(postForm);
      await assignCategoryAPI(updatedCategory);
      navigation('/');
    },
    [dispatch, navigation, assignCategoryHandler],
  );

  return <PostForm onSubmit={createPostHandler} />;
};

export default CreatePage;
