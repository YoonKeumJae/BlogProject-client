import styled from 'styled-components';

const StyledPostContent = styled.div`
  .post-header {
    position: relative;
    margin: 64px 0 0;
    padding-bottom: 8px;

    border-bottom: 1.5px solid #ccc;

    .category-box {
      font-size: 16px;
      color: #8d8d8d;
    }

    .post-title {
      margin: 4px 0;

      font-size: 24px;
      font-weight: 600;
    }

    .post-others {
      display: flex;
      flex-direction: row;
      align-items: center;

      margin: 12px 0 4px;

      .post-user {
        display: flex;
        align-items: center;

        gap: 8px;

        img {
          width: 24px;

          border-radius: 50%;
        }
      }

      .post-date {
        margin-left: 16px;
        color: #8d8d8d;
      }
    }
  }

  .post-content {
    padding: 18px 0 64px;
    margin: 0 auto;

    width: 1024px;

    .post-content-box {
      text-align: center;

      img {
        margin: 12px 0;
        width: 640px;
      }

      p {
        padding: 16px 0;
        font-size: 16px;
      }
    }
  }

  .post-footer {
    padding-bottom: 8px;
    border-bottom: 1.5px solid #ccc;

    .tag-box {
      font-size: 16px;
      color: #8d8d8d;

      margin-bottom: 16px;
    }

    .post-button-list {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .like-box {
        display: flex;
        align-items: center;

        gap: 8px;

        padding: 4px 16px;

        border: 1px solid #ccc;
        border-radius: 15px;

        font-size: 18px;
        color: #8d8d8d;
      }

      .update-and-delete {
        button {
          margin: 0 12px;
          font-size: 16px;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;

export default StyledPostContent;
