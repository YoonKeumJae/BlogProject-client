import { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getPostAPI } from '@services/post-api';
import { initPost } from '@store/post-store';
import { getCategoriesAPI } from './services/category-api';
import { initCategories } from './store/category-store';
import StyledApp from './styles/App-styled';

import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import CreatePage from './pages/Create';
import UpdatePage from './pages/Update';
import DetailPage from './pages/Detail';
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'create', element: <CreatePage /> },
      { path: 'update/:post', element: <UpdatePage /> },
      { path: 'post/:postId', element: <DetailPage /> },
      // { path: 'search?', element: <Main /> },
    ],
  },
  {
    path: '/auth',
    children: [
      { path: 'signin', element: <SignInPage /> },
      { path: 'signup', element: <SignUpPage /> },
    ],
  },
]);

const App = () => {
  const dispatch = useDispatch();

  // Post 불러오기
  useEffect(() => {
    const getPost = async () => {
      const data = await getPostAPI();

      dispatch(initPost(data));
    };

    getPost();
  }, [dispatch]);

  // Categories 불러오기
  useEffect(() => {
    const getCategories = async () => {
      const categoriesData = await getCategoriesAPI();

      dispatch(initCategories(categoriesData));
    };

    getCategories();
  }, [dispatch]);

  return (
    <StyledApp>
      <RouterProvider router={router} />
    </StyledApp>
  );
};

export default App;
