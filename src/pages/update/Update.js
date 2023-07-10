import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';

import PostForm from '@components/wrapper/PostForm';
import { regLineBreak } from '@constants/regExp';
import { updatePostAPI } from '@services/post-api';
import { updatePost } from '@store/post-store';

const Update = () => {
  const { state: post } = useLocation();
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const updatePostHandler = useCallback(
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
      const enteredDate = `${date.getFullYear()}.${date.getMonth()}.${date.getDate()} ${date.getHours()}.${date.getMinutes()}.${date.getSeconds()}`;

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

      dispatch(updatePost(postForm));
      await updatePostAPI(postForm);
      navigation('/');
    },
    [navigation, dispatch],
  );

  return <PostForm post={post} onSubmit={updatePostHandler} />;
};

export default Update;
