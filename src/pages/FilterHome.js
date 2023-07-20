import { shallowEqual, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Posts from '@components/home/Posts';

const FilterHomePage = () => {
  const [searchParams] = useSearchParams();
  const queryList = [...searchParams];

  const posts = useSelector((state) => state.post.items, shallowEqual);

  let renderedPost = posts;
  let searchedCategory = '';
  let searchedTitle = '';
  let searchedContent = '';

  if (queryList.length > 0) {
    queryList.forEach(([type, value]) => {
      if (type === 'category') searchedCategory = value;
      if (type === 'title') searchedTitle = value;
      if (type === 'content') searchedContent = value;
    });
  }

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

  return <Posts posts={renderedPost.reverse()} />;
};

export default FilterHomePage;
