import styled from 'styled-components';

const StyledTitle = styled.div`
  border-bottom: 1px solid black;
  margin-bottom: 20px;
  h1 {
    font-size: 2rem;
    margin-bottom: 10px;
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
