import styled from 'styled-components';

const StyledCategory = styled.div`
  width: 144px;

  .head {
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    .left {
      display: flex;
      justify-content: center;
      align-items: end;

      gap: 4px;

      font-size: 16px;
      font-weight: 600;

      .setting-button {
        color: #ccc;

        &:hover {
          color: #000000;
        }
      }
    }
  }

  .items {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin: 12px 0;

    .item {
      margin: 4px 0;
      font-size: 14px;

      .item-button {
        display: flex;
        align-items: center;

        .item-name {
          font-size: 14px;
          padding-left: 4px;
        }
      }
    }
  }
`;

export default StyledCategory;
