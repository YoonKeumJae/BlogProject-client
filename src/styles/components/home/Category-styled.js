import styled from 'styled-components';

const StyledCategory = styled.div`
  width: 144px;

  .head {
    display: flex;

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

        & svg {
          vertical-align: bottom;
        }
      }
    }
  }

  .items {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: inherit;

    margin-top: 12px;
  }

  .item-create {
    font-size: 12px;
    color: #ccc;

    padding: 12px 0;

    &:hover {
      color: #000000;
    }
  }
`;

export default StyledCategory;
