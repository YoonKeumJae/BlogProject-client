import styled from 'styled-components';

const StyledCommentForm = styled.form`
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
`;

export default StyledCommentForm;
