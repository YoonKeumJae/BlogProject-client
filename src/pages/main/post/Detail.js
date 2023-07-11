import StyledIndex from '@styles/main/Index-styled';
import Aside from '../Aside';
import Header from '../Header';
import PostDetail from './detail-post/PostDetail';

const Detail = () => (
  <StyledIndex>
    {/* Header */}
    <Header />

    {/* Aside Section */}
    <Aside />

    {/* Post Section */}
    <PostDetail />
  </StyledIndex>
);

export default Detail;
