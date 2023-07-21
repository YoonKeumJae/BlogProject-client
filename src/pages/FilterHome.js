import { shallowEqual, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Posts from '@components/home/Posts';

const FilterHomePage = () => {
  const [searchParams] = useSearchParams();

  const posts = useSelector((state) => state.post.items, shallowEqual);

  let renderedPost = posts;
  const searchedCategory = searchParams.get('category');
  const searchedTitle = searchParams.get('title');
  const searchedContent = searchParams.get('content');

  if (searchedCategory) {
    renderedPost = renderedPost.filter(
      (post) => post.category === searchedCategory,
    );
  }

  if (searchedTitle) {
    renderedPost = renderedPost.filter((post) =>
      post.title.toLowerCase().includes(searchedTitle.toLowerCase()),
    );
  }

  if (searchedContent) {
    renderedPost = renderedPost.filter((post) =>
      post.content.toLowerCase().includes(searchedContent.toLowerCase()),
    );
  }

  return <Posts posts={renderedPost} />;
};

export default FilterHomePage;
