import { useState, useCallback } from 'react';
import styled from 'styled-components';

const StyledLoginPage = styled.div`
  * {
    margin: 0;
    box-sizing: border-box;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    place-items: center;
    width: 100%;
    height: 100vh;

    .title {
      font-size: 60px;
      font-weight: 600;
      margin-bottom: 50px;
    }

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 1px solid #cdcdcd;
      width: 1000px;
      height: 650px;
      padding: 100px;

      .form {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;

        .titleIdpw {
          font-size: 35px;
          font-weight: 600;
          margin-bottom: 30px;
        }
        .inputIdpw {
          width: 100%;
          height: 50px;
          font-size: 25px;
          border: none;
          border-bottom: 1px solid #cdcdcd;
          margin-bottom: 30px;
        }
        .buttonWrapper {
            margin-bottom: 30px;
        }
        .loginBtn {
          width: 100%;
          height: 80px;
          background-color: black;
          color: white;
          font-size: 40px;
          border-radius: 15px;
          margin-bottom: 30px;
        }
      }
      .finder {
        width: 300px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
    }
  }
`;

const Signin = () => {
  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = useCallback(() => {
    setIsClicked((prevClicked) => !prevClicked);
  }, []);

  return (
    <StyledLoginPage>
      <div className='wrapper'>
        <div className='title'>LOGIN</div>
        <div className='container'>
          <form className='form'>
            <div className='titleIdpw'>ID</div>
            
            <input
              className='inputIdpw'
              type='text'
              placeholder='아이디를 입력해 주세요.'
            />
            
            <div className='titleIdpw'>PASSWORD</div>
            
            <input
              className='inputIdpw'
              type='password'
              placeholder='비밀번호를 입력해 주세요.'
            />
            
            <div className='buttonWrapper'>
              <button type='button' onClick={clickHandler}>
                <svg
                  width='34'
                  height='34'
                  viewBox='0 0 34 34'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M24.6502 9.63325L13.6668 20.6166L7.6835 14.6499L5.3335 16.9999L13.6668 25.3333L27.0002 11.9999L24.6502 9.63325ZM17.0002 0.333252C7.80016 0.333252 0.333496 7.79992 0.333496 16.9999C0.333496 26.1999 7.80016 33.6666 17.0002 33.6666C26.2002 33.6666 33.6668 26.1999 33.6668 16.9999C33.6668 7.79992 26.2002 0.333252 17.0002 0.333252ZM17.0002 30.3333C9.6335 30.3333 3.66683 24.3666 3.66683 16.9999C3.66683 9.63325 9.6335 3.66659 17.0002 3.66659C24.3668 3.66659 30.3335 9.63325 30.3335 16.9999C30.3335 24.3666 24.3668 30.3333 17.0002 30.3333Z'
                    fill={isClicked ? '#5cdb5c' : '#BDBDBD'}
                  />
                </svg>
              </button>
              로그인 유지
            </div>
            
            <button className='loginBtn'>LOGIN</button>
          </form>
          <div className='finder'>
            <a>아이디 찾기 </a>|<a> 비밀번호 찾기 </a>|<a>회원가입</a>
          </div>
        </div>
      </div>
    </StyledLoginPage>
  );
};

export default Signin;
