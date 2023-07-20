import styled from 'styled-components';

const StyledCategoryItem = styled.div`
  position: relative;
  display: flex;
  margin: 4px 0;
  width: inherit;

  .item {
    font-size: 14px;

    .item-button {
      display: flex;
      align-items: center;
      cursor: pointer;

      .item-name {
        font-size: 14px;
        padding-left: 4px;
        margin-right: 4px;
      }

      .item-form {
        position: relative;
        padding-left: 4px;

        input {
          width: 142px;
          border: none;
          border-bottom: 1px solid #000000;

          &:focus {
            outline: none;
          }
        }

        button {
          position: absolute;
          right: 0;

          color: #ccc;

          &:hover {
            color: #000000;
          }
        }
      }
    }

    .underline {
      margin-left: 20px;
      border-bottom: 1px solid black;
    }
  }

  .setting-option {
    position: absolute;
    right: -20px;

    display: flex;
    gap: 8px;

    button {
      color: #ccc;
      font-size: 12px;
    }

    button:hover {
      color: #000000;
    }
  }
`;

export default StyledCategoryItem;
