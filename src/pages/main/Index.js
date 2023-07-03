import styled from 'styled-components';

import Header from './Header';
import Aside from './Aside';
import Content from './Content';

const StyledIndex = styled.div`
  padding: 8px 0 128px;
`;

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
