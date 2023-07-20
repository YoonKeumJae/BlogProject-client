import styled from 'styled-components';

const StyledCategoryForm = styled.form`
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
`;

export default StyledCategoryForm;
