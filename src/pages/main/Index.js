import StyledIndex from '@styles/main/Index-styled';

import Header from './Header';
import Aside from './Aside';
import Posts from './Posts';

const Index = () => (
  <StyledIndex>
    {/* Blog Header */}
    <Header />

    {/* Aside Section */}
    <Aside />

    {/* Main Section */}
    <Posts />
  </StyledIndex>
);

export default Index;
