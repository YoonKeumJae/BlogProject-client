import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

import { deletePostAPI } from '@services/post-api';
import { deletePost } from '@store/post-store';
import DefaultProfileImage from '@assets/default-profile-image.png';
import StyledPostContent from '@styles/main/post/detail-post/PostContent';

const PostContent = ({ post }) => {
  const { id, category, title, username, date, tagList, content, like } = post;
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const onClickUpdateHandler = useCallback(() => {
    navigation(`/update/${id}`, {
      state: post,
    });
  }, [navigation, post, id]);

  const onClickDeleteHandler = useCallback(async () => {
    // eslint-disable-next-line no-restricted-globals
    const isCheck = confirm('정말 삭제하시겠습니까?');

    if (isCheck) {
      dispatch(deletePost(id));
      await deletePostAPI(id);
      navigation('/');
    }
  }, [dispatch, navigation, id]);

  return (
    <StyledPostContent>
      {/* Post Title */}
      <div className='post-header'>
        <div className='category-box'>
          <span>{category}</span>
        </div>
        <h3 className='post-title'>{title}</h3>
        <div className='post-others'>
          <div className='post-user'>
            <img src={DefaultProfileImage} alt='default user profile image' />
            <span>{username}</span>
          </div>
          <div className='post-date'>{date}</div>
        </div>
      </div>

      {/* Post Content */}
      <div className='post-content'>
        <div className='post-content-box'>
          {content.split('\\r\\n').map((line, index) => {
            if (line === '') return null;

            return (
              <p key={index}>
                {line}
                <br />
              </p>
            );
          })}
        </div>
      </div>

      {/* Post Footer */}
      <div className='post-footer'>
        <div className='tag-box'>
          {tagList && tagList.map((tag, idx) => <span key={idx}>#{tag}</span>)}
        </div>
        <div className='post-button-list'>
          <button className='like-box'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 45 44'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M31.2891 5.5C27.6592 5.5 24.4811 7.02625 22.5 9.60609C20.5189 7.02625 17.3408 5.5 13.7109 5.5C10.8215 5.50318 8.05132 6.62692 6.00818 8.62466C3.96503 10.6224 2.81576 13.331 2.8125 16.1562C2.8125 28.1875 21.0568 37.9259 21.8338 38.3281C22.0386 38.4358 22.2675 38.4922 22.5 38.4922C22.7325 38.4922 22.9614 38.4358 23.1662 38.3281C23.9432 37.9259 42.1875 28.1875 42.1875 16.1562C42.1842 13.331 41.035 10.6224 38.9918 8.62466C36.9487 6.62692 34.1785 5.50318 31.2891 5.5ZM22.5 35.5438C19.2902 33.715 5.625 25.3842 5.625 16.1562C5.62779 14.0602 6.4806 12.0508 7.9964 10.5687C9.5122 9.08658 11.5673 8.25273 13.7109 8.25C17.1299 8.25 20.0004 10.0306 21.1992 12.8906C21.3052 13.1428 21.4854 13.3585 21.717 13.5103C21.9486 13.6621 22.2212 13.7432 22.5 13.7432C22.7788 13.7432 23.0514 13.6621 23.283 13.5103C23.5146 13.3585 23.6948 13.1428 23.8008 12.8906C24.9996 10.0255 27.8701 8.25 31.2891 8.25C33.4327 8.25273 35.4878 9.08658 37.0036 10.5687C38.5194 12.0508 39.3722 14.0602 39.375 16.1562C39.375 25.3705 25.7062 33.7133 22.5 35.5438Z'
                fill='#8D8D8D'
              />
            </svg>
            <span>{like}</span>
          </button>
          <div className='update-and-delete'>
            <button onClick={onClickUpdateHandler}>수정</button>
            <button onClick={onClickDeleteHandler}>삭제</button>
          </div>
        </div>
      </div>
    </StyledPostContent>
  );
};

export default PostContent;
