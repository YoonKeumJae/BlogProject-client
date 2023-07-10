import DefaultPostImage from '@assets/default-post-image.png';
import StyledPostItem from '@styles/main/main-content/PostItem-styled';

const ContentItem = ({ post }) => {
  const { title, description, date } = post;

  return (
    <StyledPostItem>
      <div className='image'>
        <img src={DefaultPostImage} alt='default post image' />
      </div>
      <h3 className='title'>{title}</h3>
      <p className='description'>{description}</p>
      <p className='date'>{date}</p>
    </StyledPostItem>
  );
};

export default ContentItem;
