import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import StyledSearch from '@styles/components/home/Search-styled';
import convertListToQueryURI from '@utils/convert';

const Search = () => {
  const [inputQueryType, setInputQueryType] = useState('');
  const [inputQuery, setInputQuery] = useState('');

  const [searchParams] = useSearchParams();
  const queryList = [...searchParams];

  const navigate = useNavigate();

  const onInputQueryType = (e) => setInputQueryType(e.target.value);
  const onInputQuery = (e) => setInputQuery(e.target.value);

  const searchHandler = (e) => {
    e.preventDefault();

    if (inputQueryType.trim().length === 0) {
      alert('검색 타입을 지정해주세요.');
      return;
    }

    const queryURI = convertListToQueryURI(queryList, [
      inputQueryType,
      inputQuery,
    ]);
    navigate(queryURI);
  };

  return (
    <StyledSearch onSubmit={searchHandler}>
      <div className='search-box'>
        <select className='search-type' onChange={onInputQueryType}>
          <option value='' defaultValue>
            선택
          </option>
          <option value='title'>제목</option>
          <option value='content'>내용</option>
        </select>
        <input
          className='input-query'
          type='text'
          placeholder='input search query ...'
          value={inputQuery}
          onChange={onInputQuery}
        />
        <button className='search-button'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 35 35'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M32.2778 35L20.0278 22.75C19.0556 23.5278 17.9375 24.1435 16.6736 24.5972C15.4097 25.0509 14.0648 25.2778 12.6389 25.2778C9.10648 25.2778 6.11722 24.0541 3.67111 21.6067C1.225 19.1593 0.0012963 16.17 0 12.6389C0 9.10648 1.2237 6.11722 3.67111 3.67111C6.11852 1.225 9.10778 0.0012963 12.6389 0C16.1713 0 19.1606 1.2237 21.6067 3.67111C24.0528 6.11852 25.2765 9.10778 25.2778 12.6389C25.2778 14.0648 25.0509 15.4097 24.5972 16.6736C24.1435 17.9375 23.5278 19.0556 22.75 20.0278L35 32.2778L32.2778 35ZM12.6389 21.3889C15.0694 21.3889 17.1357 20.5379 18.8378 18.8358C20.5398 17.1338 21.3902 15.0681 21.3889 12.6389C21.3889 10.2083 20.5379 8.14204 18.8358 6.44C17.1338 4.73796 15.0681 3.88759 12.6389 3.88889C10.2083 3.88889 8.14204 4.73991 6.44 6.44194C4.73796 8.14398 3.88759 10.2096 3.88889 12.6389C3.88889 15.0694 4.73991 17.1357 6.44194 18.8378C8.14398 20.5398 10.2096 21.3902 12.6389 21.3889Z'
              fill='currentColor'
            />
          </svg>
        </button>
      </div>
    </StyledSearch>
  );
};

export default Search;
