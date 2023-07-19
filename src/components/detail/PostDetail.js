import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

import PostContent from './PostContent';
import CategoryList from './CategoryList';
import PostComment from './PostComment';

const PostDetail = () => {
  const { postId } = useParams();
  const posts = useSelector((state) => state.post.items);
  const renderPost = posts.filter((post) => post.id === postId);

  if (renderPost.length === 0) {
    return null;
  }

  return (
    <section>
      <PostContent post={renderPost[0]} />

      {/* Post Comment */}
      <PostComment
        postId={renderPost[0].id}
        username={renderPost[0].username}
        comments={renderPost[0].comment}
      />

      {/* Category List */}
      <CategoryList category={renderPost[0].category} />
    </section>
  );
};

export default PostDetail;
