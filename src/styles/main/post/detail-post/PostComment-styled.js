import styled from 'styled-components';

const StyledPostComment = styled.div`
  .post-comment {
    margin-top: 16px;

    .comment-title {
      display: inline-flex;
      align-items: center;

      gap: 8px;
    }

    .comment-list {
      margin: 32px 8px 0;

      .user-comment {
        position: relative;
        padding-bottom: 4px;

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
      }

      .user-coc {
        position: relative;

        background-color: #f8f8f8;

        padding-left: 54px;

        .coc-svg {
          position: absolute;
          top: 16px;
          left: 32px;
        }
      }
    }
  }

  .post-comment-form {
    position: relative;
    display: flex;

    padding: 0 8px;

    textarea {
      flex-grow: 1;
      width: inherit;
      height: 96px;

      padding: 8px;
      border: 2px solid #ccc;

      font-size: 16px;
      resize: none;

      &::placeholder {
        color: #8d8d8d;
      }

      &:hover {
        outline: none;
      }
    }

    .submit-button {
      position: absolute;
      right: 16px;
      bottom: 8px;

      padding: 8px 16px;

      color: #ffffff;

      border-radius: 10px;
      background-color: #333333;
    }
  }
`;

export default StyledPostComment;
