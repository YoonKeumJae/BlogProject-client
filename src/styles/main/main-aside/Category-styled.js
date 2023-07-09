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

    .category {
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
    }
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
