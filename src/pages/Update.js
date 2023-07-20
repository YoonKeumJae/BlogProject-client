import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';

import PostForm from '@components/common/PostForm';
import { updatePostAPI } from '@services/post-api';
import { updatePost } from '@store/post-store';

const UpdatePage = () => {
  const { state: post } = useLocation();
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const updatePostHandler = useCallback(
    async (postForm) => {
      dispatch(updatePost(postForm));
      await updatePostAPI(postForm);
      navigation('/');
    },
    [navigation, dispatch],
  );

  return <PostForm post={post} onSubmit={updatePostHandler} />;
};

export default UpdatePage;
