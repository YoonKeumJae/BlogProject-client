import styled from 'styled-components';

const StyledAccountEmailForm = styled.div`
    width: 500px;
    height: 500px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  * {
    margin: 0;
    box-sizing: border-box;
  }
  .emailVerifyForm {
    display: flex;
    flex-direction: column;
    align-items: space-evenly;
    justify-content: center;
    background-color: #f5f5f5;
    width: 60%;
    height: 60%;
  }
  .emailVerify {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 0;
  }
  .verify {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 0;
  }
  button{
    background-color: white;
    border: 1px solid black;
  }
`;

const AccountEmailForm = () => {
  return (
    <StyledAccountEmailForm>
      <form className='emailVerifyForm'>
        <div className='emailVerify'>
          <input type='email' placeholder='Email을 입력하세요...' />
          <button type='button'>인증번호 전송</button>
        </div>
        <div className='verify'>
          <input type='text' placeholder='인증번호' />
          <span>Timer here</span>
          <button type='button'>확인</button>
        </div>
        <button type='button'>다음</button>
      </form>
    </StyledAccountEmailForm>
  );
};
export default AccountEmailForm;
