import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import PostForm from '@components/wrapper/PostForm';
import { regLineBreak } from '@constants/regExp';
import { createPostAPI } from '@services/post-api';
import { createPost } from '@store/post-store';

const Create = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const createPostHandler = useCallback(
    async (form) => {
      const { enteredCategory, enteredTitle, enteredContent, enteredTagList } =
        form;
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
        id: `content-${Math.floor(Math.random() * 65565)}`, // 수정 필요,
        like: 0,
        tagList: enteredTagList,
        title: enteredTitle,
        username: '걍하지', // 수정 필요
      };

      dispatch(createPost(postForm));
      await createPostAPI(postForm);
      navigation('/');
    },
    [navigation, dispatch],
  );

  return <PostForm onSubmit={createPostHandler} />;
};

export default Create;
