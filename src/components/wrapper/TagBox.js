import { useState, useCallback } from 'react';

const TagBox = ({ tagList, setTagList }) => {
  const [enteredTag, setEnteredTag] = useState('');

  const onInputTagHandler = useCallback((e) => {
    setEnteredTag(e.target.value);
  }, []);

  const createTagHandler = useCallback(
    (e) => {
      e.preventDefault();

      if (tagList.length >= 6) {
        alert('태그는 6개 까지만 가능합니다.');
        return;
      }

      if (enteredTag.trim().length === 0) {
        alert('태그를 입력해주세요.');
        return;
      }

      if (enteredTag.trim().length > 8) {
        alert('태그를 8자 이하로 입력해주세요.');
        return;
      }

      const formattedTag = enteredTag.replace(/#/g, '');

      if (formattedTag.length === 0) {
        alert('태그를 입력해주세요.');
        return;
      }
      setTagList(tagList.concat(formattedTag));
      setEnteredTag('');
    },
    [enteredTag, tagList, setTagList],
  );

  const deleteTagHandler = useCallback(
    (index) => {
      setTagList(tagList.filter((val, idx) => idx !== index));
    },
    [tagList, setTagList],
  );

  return (
    <>
      <div className='tag-list'>
        {tagList &&
          tagList.map((tag, idx) => (
            <span
              key={`${tag}_${idx}`}
              className='tag-item'
              onClick={() => deleteTagHandler(idx)}
            >
              #{tag}
            </span>
          ))}
      </div>
      <form className='tag-box' onSubmit={createTagHandler}>
        <span>태그</span>
        <input
          type='text'
          placeholder='#태그 입력'
          value={enteredTag}
          onChange={onInputTagHandler}
        />
      </form>
    </>
  );
};

export default TagBox;
