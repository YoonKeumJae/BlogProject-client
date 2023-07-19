import styled from 'styled-components';

const StyledSignUpPage = styled.div`
  display: flex;
  border: 1px solid #cdcdcd;
  padding: 48px 16px 16px;

  .inputform {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 40px;

    &:first-child {
      margin-top: 0;
    }
  }

  .inputName {
    width: 144px;
    font-size: 18px;
  }

  input {
    font-size: 16px;
    width: 360px;
    border: none;
    border-bottom: 1px solid gray;
    padding-bottom: 4px;

    &:focus {
      outline: none;
    }

    &::placeholder {
      font-size: 14px;
    }
  }

  .buttonContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 36px;
    gap: 16px;
  }
  .cancelBtn {
    background-color: white;
    color: black;
    border-radius: 10px;
    border: 1px solid gray;
    width: 128px;
    height: 44px;
    font-size: 16px;
  }
  .joinBtn {
    background-color: black;
    color: white;
    border-radius: 10px;
    border: none;
    width: 128px;
    height: 44px;
    font-size: 16px;
  }

  .buttons {
    display: flex;
    justify-content: end;
    gap: 8px;
    font-size: 12px;

    a {
      color: #cdcdcd;

      &:hover {
        color: #000000;
      }
    }
  }
`;

export default StyledSignUpPage;
