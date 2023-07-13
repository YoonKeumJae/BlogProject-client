import { useCallback } from 'react';
import { useNavigate } from 'react-router';

import DefaultPostImage from '@assets/default-post-image.png';
import StyledPostCard from '@styles/main/main-content/PostCard-styled';

const PostCard = ({ post }) => {
  const { id, title, content, date } = post;

  const navigation = useNavigate();

  const onClickPost = useCallback(() => {
    navigation(`/post/${id}`);
  }, [navigation, id]);

  return (
    <StyledPostCard>
      <div className='image' onClick={onClickPost}>
        <img src={DefaultPostImage} alt='default post image' />
      </div>
      <h3 className='title' onClick={onClickPost}>
        {title}
      </h3>
      <p className='content-slice' onClick={onClickPost}>
        {content.replace(/\\r\\n/g, ' ').slice(0, 90)}
        {content.length >= 90 && '...'}
      </p>
      <p className='date'>{date}</p>
    </StyledPostCard>
  );
};

export default PostCard;
