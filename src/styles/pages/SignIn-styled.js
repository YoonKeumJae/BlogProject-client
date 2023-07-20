import styled from 'styled-components';

const StyledSignInPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #cdcdcd;
  width: 544px;
  padding: 32px 16px;

  .form {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    .titleIdpw {
      margin-bottom: 12px;
    }

    .inputIdpw {
      width: 100%;
      height: 24px;
      font-size: 18px;
      border: none;
      border-bottom: 1px solid #cdcdcd;
      margin-bottom: 30px;

      &:focus {
        outline: none;
      }

      &::placeholder {
        font-size: 16px;
      }
    }
    .buttonWrapper {
      margin-top: 16px;

      button {
        display: inline-flex;
        align-items: start;
        gap: 4px;
        font-size: 14px;
      }
    }

    .loginBtn {
      width: 100%;
      height: 36px;
      background-color: black;
      color: white;
      font-size: 22px;
      border-radius: 15px;
      margin: 8px 0;
    }
  }
  .finder {
    width: 100%;

    display: flex;
    justify-content: end;
    gap: 8px;

    a {
      color: #cdcdcd;
      font-size: 12px;

      &:last-child {
        margin-right: 16px;
      }

      &:hover {
        color: #000000;
      }
    }
  }
`;

export default StyledSignInPage;
