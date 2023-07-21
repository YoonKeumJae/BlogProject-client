import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import useLoadInitData from './hooks/useLoadInitData';

import RootLayout from './layouts/RootLayout';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import FilterHomePage from './pages/FilterHome';
import CreatePage from './pages/Create';
import DetailPage from './pages/Detail';
import UpdatePage from './pages/Update';

import AuthLayout from './layouts/AuthLayout';
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';

import StyledApp from './styles/App-styled';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'search?', element: <FilterHomePage /> },
      { path: 'create', element: <CreatePage /> },
      {
        path: 'post/:postId',
        children: [
          {
            index: true,
            element: <DetailPage />,
          },
          {
            path: 'update',
            element: <UpdatePage />,
          },
        ],
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: 'signin', element: <SignInPage /> },
      { path: 'signup', element: <SignUpPage /> },
    ],
  },
]);

const App = () => {
  // Load Init Data Custom hook
  useLoadInitData();

  return (
    <StyledApp>
      <RouterProvider router={router} />
    </StyledApp>
  );
};

export default App;
