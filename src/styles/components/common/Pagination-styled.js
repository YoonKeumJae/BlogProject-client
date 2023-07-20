import styled from 'styled-components';

const StyledPagination = styled.div`
  margin: 16px 0;
  text-align: center;

  .clicked-page {
    font-size: 16px;
    font-weight: 600;
    color: #000000;
  }

  button {
    margin: 0 8px;

    cursor: pointer;
    color: #8d8d8d;
  }
`;

export default StyledPagination;
