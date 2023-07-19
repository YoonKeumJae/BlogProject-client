import { Outlet } from 'react-router-dom';

import Header from '@components/root/MainHeader';
import Aside from '@components/root/MainAside';

const RootLayout = () => {
  return (
    <>
      <Header />

      <Aside />

      <main style={{ padding: '8px 0 128px' }}>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
