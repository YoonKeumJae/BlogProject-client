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

    margin: 12px 0;
  }

  .category-form {
    width: inherit;

    .category-input {
      width: inherit;
      border: none;
      border-bottom: 1px solid #000000;

      &:focus {
        outline: none;
      }

      &::placeholder {
        font-size: 12px;
        color: #ccc;
      }
    }

    button {
      margin: 8px 4px 0;
      padding: 2px 6px;
      background-color: #3498db;

      &:hover {
        background-color: #2980b9;
      }
    }
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
