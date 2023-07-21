import PostContent from './PostContent';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import CategoryList from './CategoryList';

const PostDetail = ({ post }) => {
  const comments = post.comment || [];

  return (
    <section>
      <PostContent post={post} />

      {/* Post Comment */}
      <CommentList postId={post.id} comments={comments} />
      <CommentForm postId={post.id} username={post.username} />

      {/* Category List */}
      <CategoryList postId={post.id} category={post.category} />
    </section>
  );
};

export default PostDetail;
