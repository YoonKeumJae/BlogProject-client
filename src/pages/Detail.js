import { shallowEqual, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import PostDetail from '@components/detail/PostDetail';

const Detail = () => {
  const { postId } = useParams();
  const posts = useSelector((state) => state.post.items, shallowEqual);
  const renderPost = posts.filter((post) => post.id === postId);

  if (!renderPost[0]) return null;

  return <PostDetail post={renderPost[0]} />;
};

export default Detail;
