import { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getPostAPI } from '@services/post-api';
import { initPost } from '@store/post-store';
import { getCategoriesAPI } from './services/category-api';
import { initCategories } from './store/category-store';
import StyledApp from './styles/App-styled';

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
  const dispatch = useDispatch();

  /** 초기 데이터 설정
   * Posts, Categories
   */
  useEffect(() => {
    const getInitData = async () => {
      const data = await getPostAPI();
      const categoriesData = await getCategoriesAPI();

      dispatch(initPost(data));
      dispatch(initCategories(categoriesData));
    };

    getInitData();
  }, [dispatch]);

  return (
    <StyledApp>
      <RouterProvider router={router} />
    </StyledApp>
  );
};

export default App;
