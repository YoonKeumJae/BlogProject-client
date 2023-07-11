import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import DefaultProfileImage from '@assets/default-profile-image.png';
import { createCommentAPI } from '@services/comment-api';
import { createComment } from '@store/post-store';
import StyledPostComment from '@styles/main/post/detail-post/PostComment-styled';

const PostComment = ({ postId, username, comments }) => {
  const [enteredContent, setEnteredContent] = useState('');
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
      }.${date.getDate()} ${date.getHours()}.${date.getMinutes()}.${date.getSeconds()}`;

      const commentForm = {
        id: `comment-${Math.floor(Math.random() * 65565)}`,
        type: 'comment',
        profile: '',
        username,
        content: enteredContent,
        date: enteredDate,
      };

      dispatch(createComment({ postId, commentForm }));
      await createCommentAPI(postId, commentForm);
      setEnteredContent('');
    },
    [enteredContent, postId, username, dispatch],
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
            <div
              key={comment.id}
              className={`user-comment ${
                comment.type === 'reply' && 'user-coc'
              }`}
            >
              {comment.type === 'reply' && (
                <svg
                  className='coc-svg'
                  width='18'
                  height='12'
                  viewBox='0 0 32 30'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <line
                    x1='1.375'
                    y1='30'
                    x2='1.375'
                    y2='-2.02656e-06'
                    stroke='#BCBCBC'
                    strokeWidth='2'
                  />
                  <line
                    x1='2'
                    y1='28.9551'
                    x2='32'
                    y2='28.9551'
                    stroke='#BCBCBC'
                    strokeWidth='2'
                  />
                </svg>
              )}

              <div className='user-profile'>
                <img
                  src={DefaultProfileImage || comment.profile}
                  alt='default user profile image'
                />
                <span>{comment.username}</span>
              </div>
              <div className='comment-main'>
                <p>{comment.content}</p>
                <div className='comment-date'>{comment.date}</div>
              </div>
              <div className='comment-button'>
                <button>답글</button>
                <button>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 35 35'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M14.5833 17.4999C14.5833 18.2735 14.8905 19.0153 15.4375 19.5623C15.9845 20.1093 16.7264 20.4166 17.4999 20.4166C18.2735 20.4166 19.0153 20.1093 19.5623 19.5623C20.1093 19.0153 20.4166 18.2735 20.4166 17.4999C20.4166 16.7264 20.1093 15.9845 19.5623 15.4375C19.0153 14.8905 18.2735 14.5833 17.4999 14.5833C16.7264 14.5833 15.9845 14.8905 15.4375 15.4375C14.8905 15.9845 14.5833 16.7264 14.5833 17.4999ZM14.5833 8.74992C14.5833 9.52347 14.8905 10.2653 15.4375 10.8123C15.9845 11.3593 16.7264 11.6666 17.4999 11.6666C18.2735 11.6666 19.0153 11.3593 19.5623 10.8123C20.1093 10.2653 20.4166 9.52347 20.4166 8.74992C20.4166 7.97637 20.1093 7.2345 19.5623 6.68752C19.0153 6.14054 18.2735 5.83325 17.4999 5.83325C16.7264 5.83325 15.9845 6.14054 15.4375 6.68752C14.8905 7.2345 14.5833 7.97637 14.5833 8.74992ZM14.5833 26.2499C14.5833 27.0235 14.8905 27.7653 15.4375 28.3123C15.9845 28.8593 16.7264 29.1666 17.4999 29.1666C18.2735 29.1666 19.0153 28.8593 19.5623 28.3123C20.1093 27.7653 20.4166 27.0235 20.4166 26.2499C20.4166 25.4764 20.1093 24.7345 19.5623 24.1875C19.0153 23.6405 18.2735 23.3333 17.4999 23.3333C16.7264 23.3333 15.9845 23.6405 15.4375 24.1875C14.8905 24.7345 14.5833 25.4764 14.5833 26.2499Z'
                      fill='#333333'
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Post Comment Form */}
      <form className='post-comment-form' onSubmit={createCommentHandler}>
        <textarea
          className='input-form'
          placeholder='댓글을 입력하세요.'
          value={enteredContent}
          onChange={onInputCommentHandler}
        />
        <button className='submit-button'>등록</button>
      </form>
    </StyledPostComment>
  );
};

export default PostComment;
