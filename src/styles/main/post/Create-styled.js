import styled from 'styled-components';

const StyledCreate = styled.section`
  width: 800px;
  margin: 32px auto 0;

  .post-form {
    margin: 0 24px;
    border: 1px solid #bcbcbc;

    .header {
      padding: 12px 24px;

      .select-category {
        font-size: 14px;
        font-weight: bold;
        border: none;
        border-bottom: 1px solid #ccc;

        cursor: pointer;

        &:focus {
          outline: none;
        }
      }

      .post-title {
        width: 100%;

        border-bottom: 1px solid #8d8d8d;

        input {
          width: inherit;
          margin-top: 16px;
          padding-bottom: 8px;

          font-size: 24px;
          border: none;

          &::placeholder {
            color: #cdcdcd;
          }

          &:focus {
            outline: none;
          }
        }
      }
    }

    .body {
      .post-toolbar {
        padding: 0 24px;

        display: flex;
        align-items: center;

        font-size: 18px;
        color: #333333;
        background-color: #f8f8f8;

        height: 48px;

        border-top: 1px solid #bcbcbc;

        button {
          font-size: 16px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 4px;

          margin: 0 12px;

          color: #ccc;

          &:hover {
            color: #000000;
          }
        }
      }

      .post-content {
        width: 702px;
        height: 416px;

        padding: 24px;

        border-top: 1px solid #bcbcbc;
        border-bottom: 1px solid #bcbcbc;

        .content-box {
          padding: 0;

          width: inherit;
          height: inherit;

          border: none;
          resize: none;

          font-size: 16px;

          &::placeholder {
            color: #cdcdcd;
          }

          &:focus {
            outline: none;
          }
        }
      }
    }

    .footer {
      position: relative;

      .tag-list {
        position: absolute;
        top: 0;
        left: 84px;

        display: flex;
        flex-direction: row;
        justify-content: start;

        .tag-item {
          border: 1px solid #ccc;

          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 3px;
          padding: 3px;
          background-color: tomato;
          border-radius: 5px;
          color: white;

          font-size: 10px;

          cursor: pointer;

          &:hover {
            background-color: gray;
          }
        }
      }

      .tag-box {
        display: flex;
        align-items: center;
        gap: 16px;

        height: 64px;
        padding: 16px 24px 0;
        margin: 0 16px;

        background-color: #f8f8f8;

        input {
          flex-grow: 1;
          padding-inline: 12px;
          height: 36px;
          border: 1px solid #d9d9d9;

          &:focus {
            outline: none;
          }
        }
      }

      .post-button-container {
        display: flex;
        justify-content: space-between;

        margin: 0 24px;
        padding: 12px 0;

        border-top: 1px solid #cdcdcd;

        .cancel,
        .temp-create,
        .create {
          padding: 8px 16px;
          border: 1px solid #bcbcbc;
          box-shadow: 0px 2px 10px 0px #0000001a;
        }

        .create-box {
          .temp-create {
            color: #333333;

            .count {
              color: #8d8d8d;
              font-weight: 700;

              margin-left: 8px;
              padding-left: 8px;
              border-left: 1px solid #bcbcbc;
            }
          }

          .create {
            margin-left: 16px;
            color: white;
            background-color: #333333;
          }
        }
      }
    }
  }
`;

export default StyledCreate;
