import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { createCommentAPI } from '@services/comment-api';
import { createComment } from '@store/post-store';
import StyledPostComment from '@styles/main/post/detail-post/PostComment-styled';
import CommentItem from './CommentItem';

const PostComment = ({ postId, username, comments }) => {
  const [enteredContent, setEnteredContent] = useState('');
  const [updateingId, setUpdatingId] = useState('');
  // const [isReply, setIsReply] = useState(false);

  const dispatch = useDispatch();

  const onInputCommentHandler = useCallback(
    (e) => setEnteredContent(e.target.value),
    [],
  );

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

  const submitCommentHandler = useCallback(
    (e) => {
      if (e.key === 'Enter') createCommentHandler(e);
    },
    [createCommentHandler],
  );

  return (
    <StyledPostComment>
      <div className='post-comment'>
        <div className='comment-title'>
          <h3>댓글</h3>
          <span>{comments.length}</span>
        </div>
        <div className='comment-list'>
          {comments.map((comment) => (
            <CommentItem
              key={comment.id}
              postId={postId}
              comment={comment}
              isUpdate={updateingId === comment.id}
              onUpdateMode={setUpdatingId}
            />
          ))}
        </div>
      </div>

      {/* Post Comment Form */}
      <form className='post-comment-form' onSubmit={createCommentHandler}>
        <textarea
          className='input-form'
          placeholder='댓글을 입력하세요.'
          value={enteredContent}
          onKeyDown={submitCommentHandler}
          onChange={onInputCommentHandler}
        />
        <button className='submit-button'>등록</button>
      </form>
    </StyledPostComment>
  );
};

export default PostComment;
