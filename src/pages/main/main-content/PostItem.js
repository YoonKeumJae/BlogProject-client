import { useNavigate } from 'react-router';

import DefaultPostImage from '@assets/default-post-image.png';
import StyledPostItem from '@styles/main/main-content/PostItem-styled';
import { useCallback } from 'react';

const ContentItem = ({ post }) => {
  const { id, title, description, date } = post;
  const navigation = useNavigate();

  const onClickPost = useCallback(() => {
    navigation(`/post/${id}`);
  }, [navigation, id]);

  return (
    <StyledPostItem>
      <div className='image' onClick={onClickPost}>
        <img src={DefaultPostImage} alt='default post image' />
      </div>
      <h3 className='title' onClick={onClickPost}>
        {title}
      </h3>
      <p className='description' onClick={onClickPost}>
        {description}
      </p>
      <p className='date'>{date}</p>
    </StyledPostItem>
  );
};

export default ContentItem;
