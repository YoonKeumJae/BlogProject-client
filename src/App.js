import { useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { useDispatch } from 'react-redux';

import { getPostAPI } from '@services/post-api';
import { initPost } from '@store/post-store';
import { getCategoriesAPI } from './services/category-api';
import { initCategories } from './store/category-store';
import StyledApp from './styles/App-styled';
import Main from './pages/main/Index';
import Create from './pages/create/Create';
import Update from './pages/update/Update';
import Detail from './pages/main/post/Detail';

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
      <Routes>
        <Route path='/' element={<Main />}>
          <Route path='/search?' element={<Main />} />
        </Route>
        <Route path='/create' element={<Create />} />
        <Route path='/update/:post' element={<Update />} />
        <Route path='/post/:postId' element={<Detail />} />
      </Routes>
    </StyledApp>
  );
};

export default App;