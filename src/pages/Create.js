import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import PostForm from '@components/common/PostForm';
import { createPostAPI } from '@services/post-api';
import { createPost } from '@store/post-store';

const CreatePage = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const createPostHandler = useCallback(
    async (postForm) => {
      dispatch(createPost(postForm));
      await createPostAPI(postForm);
      navigation('/');
    },
    [dispatch, navigation],
  );

  return <PostForm onSubmit={createPostHandler} />;
};

export default CreatePage;
