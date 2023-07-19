import { useSearchParams } from 'react-router-dom';

const FilterPostsPage = () => {
  const [searchParams] = useSearchParams();
  const queryList = [...searchParams];

  // eslint-disable-next-line no-console
  console.log(queryList);

  return <div></div>;
};

export default FilterPostsPage;
