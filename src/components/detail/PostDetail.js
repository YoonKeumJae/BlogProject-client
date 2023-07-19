import PostContent from './PostContent';
import CategoryList from './CategoryList';
import PostComment from './PostComment';

const PostDetail = ({ post }) => (
  <section>
    <PostContent post={post} />

    {/* Post Comment */}
    <PostComment
      postId={post.id}
      username={post.username}
      comments={post.comment}
    />

    {/* Category List */}
    <CategoryList category={post.category} />
  </section>
);

export default PostDetail;
