import styled from 'styled-components';

const StyledTitle = styled.div`
  h1 {
    font-size: 2rem;
  }
`;

const Title = () => {
  return (
    <StyledTitle>
      <h1>Title Here</h1>
    </StyledTitle>
  );
};

export default Title;
