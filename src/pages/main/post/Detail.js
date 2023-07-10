import StyledIndex from '@styles/main/Index-styled';
import Aside from '../Aside';
import Header from '../Header';
import Post from './detail-post/Post';

const Detail = () => {
  return (
    <StyledIndex>
      {/* Header */}
      <Header />

      {/* Aside Section */}
      <Aside />

      {/* Post Section */}
      <Post />
    </StyledIndex>
  );
};

export default Detail;
