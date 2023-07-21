import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import Posts from '@components/home/Posts';
import { changeCategory } from '@store/category-store';

const HomePage = () => {
  const posts = useSelector((state) => state.post.items, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeCategory('전체글'));
  }, [dispatch]);

  return <Posts posts={posts} />;
};

export default HomePage;
