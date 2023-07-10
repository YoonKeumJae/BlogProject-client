import StyledIndex from '@styles/main/Index-styled';

import Header from './Header';
import Aside from './Aside';
import Post from './Post';

const Index = () => (
  <StyledIndex>
    {/* Blog Header */}
    <Header />

    {/* Aside Section */}
    <Aside />

    {/* Main Section */}
    <Post />
  </StyledIndex>
);

export default Index;
