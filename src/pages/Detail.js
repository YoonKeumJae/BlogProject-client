import { useSelector, shallowEqual } from 'react-redux';
import { useParams } from 'react-router-dom';

import PostDetail from '@components/detail/PostDetail';
import StyledIndex from '@styles/main/Index-styled';

const Detail = () => {
  const { postId } = useParams();
  const posts = useSelector((state) => state.post.items, shallowEqual);
  const renderPost = posts.filter((post) => post.id === postId);

  if (renderPost.length === 0) {
    return null;
  }

  return (
    <StyledIndex>
      <PostDetail post={renderPost[0]} />
    </StyledIndex>
  );
};

export default Detail;
