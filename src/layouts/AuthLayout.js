import { Outlet, useLocation } from 'react-router-dom';
import StyledAuthLayout from '@styles/layouts/AuthLayout-Styled';

const AuthLayout = () => {
  const { pathname } = useLocation();
  const title = pathname === '/auth/signin' ? 'login' : 'join us';

  return (
    <StyledAuthLayout>
      <h1 className='title'>{title}</h1>

      <Outlet />
    </StyledAuthLayout>
  );
};

export default AuthLayout;
