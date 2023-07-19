import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import PostForm from '@components/wrapper/PostForm';
import { regLineBreak } from '@constants/regExp';
import { assignCategoryAPI } from '@services/category-api';
import { createPostAPI } from '@services/post-api';
import { replaceCategory } from '@store/category-store';
import { createPost } from '@store/post-store';

const CreatePage = () => {
  const categories = useSelector((state) => state.category.items);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const assignCategoryHandler = useCallback(
    (enteredCategory) => {
      const updatedCategory = categories.map((category) =>
        category.name === enteredCategory || category.id === '0'
          ? { ...category, count: category.count + 1 }
          : category,
      );

      return updatedCategory;
    },
    [categories],
  );

  const createPostHandler = useCallback(
    async (form) => {
      const {
        id,
        enteredCategory,
        enteredTitle,
        enteredContent,
        enteredTagList,
      } = form;
      if (enteredCategory.trim().length === 0) return;
      if (enteredTitle.trim().length === 0) return;
      if (enteredContent.trim().length === 0) return;

      const date = new Date();
      const enteredDate = `${date.getFullYear()}.${
        date.getMonth() + 1
      }.${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

      const formattedContent = enteredContent.replace(regLineBreak, '\\r\\n');

      const postForm = {
        content: formattedContent,
        category: enteredCategory,
        comment: [],
        date: enteredDate,
        id, // 수정 필요,
        like: 0,
        tagList: enteredTagList,
        title: enteredTitle,
        username: '걍하지', // 수정 필요
      };
      const updatedCategory = assignCategoryHandler(enteredCategory);

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
