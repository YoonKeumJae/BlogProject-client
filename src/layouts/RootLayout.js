import { Outlet } from 'react-router-dom';

import MainHeader from '@components/root/MainHeader';
import MainAside from '@components/root/MainAside';

const RootLayout = () => {
  return (
    <>
      <MainHeader />

      <MainAside />

      <main style={{ padding: '8px 0 128px' }}>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
