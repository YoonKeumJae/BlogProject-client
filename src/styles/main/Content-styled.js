import styled from 'styled-components';

const StyledContent = styled.section`
  margin-top: 120px;

  .main-content {
    margin: 24px 0 64px;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;

    row-gap: 24px;
  }

  .page-box {
    text-align: center;

    .clicked-page {
      font-size: 16px;
      padding: 12px;

      border: 1px solid #909090;
      border-radius: 10px;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1),
        0 2px 4px -2px rgb(0 0 0 / 0.1);
    }
  }
`;

export default StyledContent;
