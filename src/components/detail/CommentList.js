import { useState } from 'react';

import StyledCommentList from '@styles/components/detail/CommentList-styled';
import CommentItem from './CommentItem';

const CommentList = ({ postId, comments }) => {
  const [updateingId, setUpdatingId] = useState('');

  return (
    <StyledCommentList>
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
    </StyledCommentList>
  );
};

export default CommentList;
