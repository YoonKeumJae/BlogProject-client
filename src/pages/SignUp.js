import { Link } from 'react-router-dom';

import StyledSignUpPage from '@styles/pages/SignUp-Styled';

const SignUpPage = () => (
  <StyledSignUpPage>
    <div className='container'>
      <form className='container__form'>
        <div className='inputform'>
          <h4 className='inputName'>아이디</h4>
          <input type='text' placeholder='아이디를 입력해주세요.' />
        </div>
        <div className='inputform'>
          <h4 className='inputName'>비밀번호</h4>
          <input type='password' placeholder='비밀번호를 입력해주세요.' />
        </div>
        <div className='inputform'>
          <h4 className='inputName'>비밀번호 확인</h4>
          <input type='password' placeholder='비밀번호를 재입력해주세요.' />
        </div>
        <div className='inputform'>
          <h4 className='inputName'>이메일</h4>
          <input type='email' placeholder='이메일을 입력해주세요.' />
        </div>
        <div className='inputform'>
          <h4 className='inputName'>닉네임</h4>
          <input type='text' placeholder='닉네임을 입력해주세요.' />
        </div>
        <div className='buttonContainer'>
          <button type='button' className='joinBtn'>
            회원가입
          </button>
          <button type='button' className='cancelBtn'>
            취소
          </button>
        </div>
        <div className='buttons'>
          <Link to='/'>홈</Link>
          <Link to='/auth/signin'>로그인</Link>
        </div>
      </form>
    </div>
  </StyledSignUpPage>
);

export default SignUpPage;
