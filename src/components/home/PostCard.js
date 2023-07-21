import React from 'react';
import { useNavigate } from 'react-router';

import DefaultPostImage from '@assets/default-post-image.png';
import StyledPostCard from '@styles/components/home/PostCard-styled';

const PostCard = ({ post }) => {
  const { id, title, content, date } = post;
  const comments = post.comment || [];

  const navigation = useNavigate();

  const onClickPost = () => navigation(`/post/${id}`);

  return (
    <StyledPostCard>
      <div className='image' onClick={onClickPost}>
        <img src={DefaultPostImage} alt='default post image' />
      </div>
      <div className='title-header'>
        <h3 className='title' onClick={onClickPost}>
          {title}
        </h3>
        {comments.length !== 0 && <span>({comments.length})</span>}
      </div>
      <p className='content-slice' onClick={onClickPost}>
        {content.replace(/\\r\\n/g, ' ').slice(0, 90)}
        {content.length >= 90 && '...'}
      </p>
      <p className='date'>{date}</p>
    </StyledPostCard>
  );
};

export default React.memo(PostCard);
