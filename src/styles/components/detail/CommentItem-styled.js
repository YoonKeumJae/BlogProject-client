import styled, { css } from 'styled-components';

const StyledCommentItem = styled.div`
  position: relative;
  padding-bottom: 4px;
  ${(props) =>
    props.type === 'reply' &&
    css`
      position: relative;

      background-color: #f8f8f8;

      padding-left: 54px;

      .reply-svg {
        position: absolute;
        top: 16px;
        left: 32px;
      }
    `}

  border-bottom: 1px solid #bcbcbc;

  &:not(:first-child) {
    padding-top: 16px;
  }

  &:last-child {
    border-bottom: none;
  }

  .user-profile {
    display: inline-flex;

    gap: 8px;

    img {
      width: 24px;

      border-radius: 50%;
    }

    span {
      font-weight: 600;
    }
  }

  .comment-main {
    padding-left: 32px;
    margin: 2px 0;

    .comment-update-form {
      position: relative;

      padding-left: 12px;
      border: 1px solid #ccc;

      input {
        width: 100%;
        height: 54px;

        padding: 0;
        border: none;

        &:focus {
          outline: none;
        }
      }

      .button-box {
        position: absolute;
        right: 15px;
        bottom: 5px;

        button {
          padding: 4px 8px;
          color: #ccc;

          &:hover {
            font-weight: 700;
            color: #000000;
          }
        }
      }
    }

    .comment-date {
      margin: 8px 0;

      font-size: 14px;
      color: #bcbcbc;
    }
  }

  .comment-button {
    display: flex;
    align-items: flex-start;

    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0, -50%);

    .setting-button {
      display: flex;
      flex-direction: column;

      position: absolute;
      top: -50px;
      right: -10px;

      text-align: right;

      border: 1px solid #000000;

      background-color: #ccc;

      button {
        padding: 2px 4px;

        &:first-child {
          border-bottom: 1px solid #000000;
        }

        &:hover {
          background-color: #575757;
        }
      }
    }
  }
`;

export default StyledCommentItem;
