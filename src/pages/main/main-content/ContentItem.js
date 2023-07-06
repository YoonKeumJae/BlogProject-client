import DefaultPostImage from '@assets/default-post-image.png';
import StyledContentItem from '@styles/main/main-content/ContentItem-styled';

const ContentItem = ({ content }) => {
  const { title, description, date } = content;

  return (
    <StyledContentItem>
      <div className='image'>
        <img src={DefaultPostImage} alt='default post image' />
      </div>
      <h3 className='title'>{title}</h3>
      <p className='description'>{description}</p>
      <p className='date'>{date}</p>
    </StyledContentItem>
  );
};

export default ContentItem;
