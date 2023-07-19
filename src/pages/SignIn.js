import { useState } from 'react';
import { Link } from 'react-router-dom';

import StyledSignInPage from '@styles/pages/SignIn-Styled';

const SignInPage = () => {
  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = () => setIsClicked((prevClicked) => !prevClicked);

  return (
    <StyledSignInPage>
      <form className='form'>
        <h4 className='titleIdpw'>아이디</h4>
        <input
          className='inputIdpw'
          type='text'
          placeholder='아이디를 입력해 주세요.'
        />

        <h4 className='titleIdpw'>비밀번호</h4>
        <input
          className='inputIdpw'
          type='password'
          placeholder='비밀번호를 입력해 주세요.'
        />

        <div className='buttonWrapper'>
          <button
            type='button'
            onClick={clickHandler}
            style={{ color: `${isClicked ? '#5cdb5c' : '#BDBDBD'}` }}
          >
            <svg
              width='18'
              height='18'
              viewBox='0 0 34 34'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M24.6502 9.63325L13.6668 20.6166L7.6835 14.6499L5.3335 16.9999L13.6668 25.3333L27.0002 11.9999L24.6502 9.63325ZM17.0002 0.333252C7.80016 0.333252 0.333496 7.79992 0.333496 16.9999C0.333496 26.1999 7.80016 33.6666 17.0002 33.6666C26.2002 33.6666 33.6668 26.1999 33.6668 16.9999C33.6668 7.79992 26.2002 0.333252 17.0002 0.333252ZM17.0002 30.3333C9.6335 30.3333 3.66683 24.3666 3.66683 16.9999C3.66683 9.63325 9.6335 3.66659 17.0002 3.66659C24.3668 3.66659 30.3335 9.63325 30.3335 16.9999C30.3335 24.3666 24.3668 30.3333 17.0002 30.3333Z'
                fill='currentColor'
              />
            </svg>
            <span>로그인 유지</span>
          </button>
        </div>

        <button className='loginBtn'>로그인</button>
      </form>
      <div className='finder'>
        <Link to='/'>홈</Link>
        <Link to='findId'>아이디 찾기</Link>
        <Link to='findPwd'>비밀번호 찾기</Link>
        <Link to='/auth/signup'>회원가입</Link>
      </div>
    </StyledSignInPage>
  );
};

export default SignInPage;
