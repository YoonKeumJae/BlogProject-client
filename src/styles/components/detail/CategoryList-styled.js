import styled from 'styled-components';

const StyledCategoryList = styled.div`
  margin-top: 64px;

  .category-name {
    border-bottom: 2px solid #ccc;
    padding-bottom: 4px;

    .selected-category {
      font-size: 18px;
      font-weight: 600;

      margin-right: 8px;
    }

    .category-class {
      font-size: 16px;
      color: #8d8d8d;
    }
  }

  .category-item-list {
    .category-item {
      display: flex;
      justify-content: space-between;

      padding: 12px 8px;
      border-bottom: 1px solid #ccc;

      .item-left {
        color: #bcbcbc;

        cursor: pointer;

        .item-title {
          margin-right: 12px;
        }
      }

      .item-right {
        color: #bcbcbc;
      }

      &:last-child {
        border: none;
      }
    }

    .selected {
      font-weight: 600;

      .item-left {
        color: #333333;
      }

      .item-right {
        color: #333333;
      }
    }
  }

  .category-page-container {
    margin-top: 48px;
    text-align: center;
    color: #8d8d8d;

    .selected-category-page {
      padding: 4px 12px;

      border: 1px solid #ccc;
      border-radius: 10px;
    }

    button {
      margin: 0 8px;
    }
  }
`;

export default StyledCategoryList;
