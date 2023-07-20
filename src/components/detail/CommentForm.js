import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { createCommentAPI } from '@services/comment-api';
import { createComment } from '@store/post-store';
import StyledCommentForm from '@styles/components/detail/CommentForm-styled';

const CommentForm = ({ postId, username }) => {
  const [enteredContent, setEnteredContent] = useState('');

  const dispatch = useDispatch();

  const onInputCommentHandler = (e) => setEnteredContent(e.target.value);

  const createCommentHandler = useCallback(
    async (e) => {
      e.preventDefault();

      if (enteredContent.trim().length === 0) return;

      const date = new Date();
      const enteredDate = `${date.getFullYear()}.${
        date.getMonth() + 1
      }.${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

      const commentForm = {
        id: `comment-${Math.floor(Math.random() * 65565)}`,
        type: 'comment',
        profile: '',
        username,
        content: enteredContent,
        date: enteredDate,
      };

      setEnteredContent('');
      dispatch(createComment({ postId, commentForm }));
      await createCommentAPI(postId, commentForm);
    },
    [enteredContent, postId, username, dispatch],
  );

  const submitCommentHandler = (e) => {
    if (e.key === 'Enter') createCommentHandler(e);
  };

  return (
    <StyledCommentForm onSubmit={createCommentHandler}>
      <textarea
        className='input-form'
        placeholder='댓글을 입력하세요.'
        value={enteredContent}
        onKeyDown={submitCommentHandler}
        onChange={onInputCommentHandler}
      />
      <button className='submit-button'>등록</button>
    </StyledCommentForm>
  );
};

export default CommentForm;
