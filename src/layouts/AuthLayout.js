import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const StyledAuth = styled.section`
  padding-top: 128px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    margin-bottom: 48px;
    text-transform: uppercase;
  }
`;

const AuthLayout = () => {
  const { pathname } = useLocation();
  const title = pathname === '/auth/signin' ? 'login' : 'join us';

  return (
    <StyledAuth>
      <h1 className='title'>{title}</h1>

      <Outlet />
    </StyledAuth>
  );
};

export default AuthLayout;
