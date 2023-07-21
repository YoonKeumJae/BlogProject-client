import PostContent from './PostContent';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import CategoryList from './CategoryList';

const PostDetail = ({ post }) => {
  let comments = post.comment || [];

  if (comments.length > 0) {
    comments = comments.filter((comment) => comment);
  }

  const nextCommentId = comments.length > 0 ? comments.slice(-1)[0].id : 0;

  return (
    <section>
      <PostContent post={post} />

      {/* Post Comment */}
      <CommentList postId={post.id} comments={comments} />
      <CommentForm
        postId={post.id}
        username={post.username}
        nextCommentId={nextCommentId}
      />

      {/* Category List */}
      <CategoryList postId={post.id} category={post.category} />
    </section>
  );
};

export default PostDetail;
