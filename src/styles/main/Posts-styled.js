import styled from 'styled-components';

const StyledPosts = styled.section`
  margin-top: 120px;

  .main-content {
    margin: 24px 0 64px;

    display: flex;
    flex-direction: row;
    justify-content: start;
    flex-wrap: wrap;

    column-gap: 12px;
    row-gap: 24px;
  }

  .page-box {
    text-align: center;

    .clicked-page {
      font-size: 16px;
      font-weight: 700;
    }

    a {
      margin: 0 8px;

      cursor: pointer;
      color: #ccc;
    }
  }
`;

export default StyledPosts;
