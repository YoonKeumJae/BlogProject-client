import StyledIndex from '../../styles/main/Index-styled';

import Header from './Header';
import Aside from './Aside';
import Content from './Content';

const Index = () => (
  <StyledIndex>
    {/* Blog Header */}
    <Header />

    {/* Aside Section */}
    <Aside />

    {/* Main Section */}
    <Content />
  </StyledIndex>
);

export default Index;
