import PostContent from './PostContent';
import CategoryList from './CategoryList';
import PostComment from './PostComment';

const Post = () => {
  return (
    <section>
      <PostContent />

      {/* Post Comment */}
      <PostComment />

      {/* Category List */}
      <CategoryList />
    </section>
  );
};

export default Post;
