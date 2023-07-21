import { shallowEqual, useSelector } from 'react-redux';

import Posts from '@components/home/Posts';

const HomePage = () => {
  const posts = useSelector((state) => state.post.items, shallowEqual);

  return <Posts posts={posts} />;
};

export default HomePage;
