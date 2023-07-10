import styled from 'styled-components';

const StyledSignupPage = styled.div`
  margin: 0px;
  box-sizing: border-box;

  .wrapper {
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .title {
    width: 1000px;
    font-size: 60px;
    border-bottom: 1px solid gray;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .container__form {
    width: 1000px;
  }

  .inputform {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 40px 40px;
  }
  .inputName {
    width: 190px;
    font-size: 35px;
  }

  input {
    font-size: 35px;
    width: 700px;
    border: none;
    border-bottom: 1px solid gray;
  }
  .buttonContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 50px;
  }
  .cancelBtn {
    background-color: white;
    color: black;
    border-radius: 10px;
    border: 1px solid gray;
    width: 450px;
    height: 80px;
    font-size: 40px;
  }
  .joinBtn {
    background-color: black;
    color: white;
    border-radius: 10px;
    border: none;
    width: 450px;
    height: 80px;
    font-size: 40px;
  }
`;

const Signup = () => (
  <StyledSignupPage>
    <div className='wrapper'>
      <div className='title'>JOIN US</div>
      <div className='container'>
        <form className='container__form'>
          <div className='inputform'>
            <span className='inputName'>아이디</span>
            <input type='text' placeholder='영문/숫자' />
          </div>
          <div className='inputform'>
            <span className='inputName'>비밀번호</span>
            <input type='password' placeholder='영문/숫자/특수문자' />
          </div>
          <div className='inputform'>
            <span className='inputName'>비밀번호 확인</span>
            <input type='password' />
          </div>
          <div className='inputform'>
            <span className='inputName'>이메일</span>
            <input type='email' />
          </div>
          <div className='inputform'>
            <span className='inputName'>닉네임</span>
            <input type='text' />
          </div>
          <div className='buttonContainer'>
            <button type='button' className='cancelBtn'>
              CANCEL
            </button>
            <button type='button' className='joinBtn'>
              JOIN
            </button>
          </div>
        </form>
      </div>
    </div>
  </StyledSignupPage>
);

export default Signup;
