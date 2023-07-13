import styled from 'styled-components';
import Title from './title';
import AccountEmailForm from './AccountEmailForm';

const StyledFindPassword = styled.div`
  * {
    margin: 0;
    box-sizing: border-box;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  Title {
    margin-bottom: 20px;
  }
`;

const FindPassword = () => {
  return (
    <StyledFindPassword>
      <Title />
      <AccountEmailForm />
    </StyledFindPassword>
  );
};

export default FindPassword;
