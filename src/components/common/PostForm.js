import { useState, useEffect } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { regLineBreak } from '@constants/regExp';
import StyledPostForm from '@styles/components/common/PostForm-styled';
import TagBox from './TagBox';

const PostForm = ({ post, onSubmit }) => {
  const [enteredCategory, setEnteredCategory] = useState('');
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredContent, setEnteredContent] = useState('');
  const [enteredTagList, setEnteredTagList] = useState([]);

  const categories = useSelector((state) => state.category.items, shallowEqual);
  const postSize = useSelector((state) => state.post.size);
  const navigation = useNavigate();

  useEffect(() => {
    if (post) {
      const { category, title, content, tagList } = post;

      const formattedContent = content.replace(/\\r\\n/g, '\r\n');

      setEnteredCategory(category);
      setEnteredTitle(title);
      setEnteredContent(formattedContent);
      setEnteredTagList(tagList);
    }
  }, [post]);

  const onInputCategoryHandler = (e) => setEnteredCategory(e.target.value);
  const onInputTitleHandler = (e) => setEnteredTitle(e.target.value);
  const onInputContentHandler = (e) => setEnteredContent(e.target.value);

  const submitPostHandler = () => {
    const id = post ? post.id : postSize.toString();

    if (enteredCategory.trim().length === 0) {
      alert('카테고리를 설정해주세요.');
      return;
    }
    if (enteredTitle.trim().length === 0) {
      alert('제목을 입력해주세요.');
      return;
    }
    if (enteredContent.trim().length === 0) {
      alert('내용을 입력해주세요.');
      return;
    }

    const date = new Date();
    const enteredDate = `${date.getFullYear()}.${
      date.getMonth() + 1
    }.${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    const formattedContent = enteredContent.replace(regLineBreak, '\\r\\n');

    const postForm = {
      content: formattedContent,
      category: enteredCategory,
      comment: [],
      date: enteredDate,
      id,
      like: 0,
      tagList: enteredTagList,
      title: enteredTitle,
      username: '걍하지', // 수정 필요
    };

    onSubmit(postForm);
  };

  const cancelPostHandler = () => {
    setEnteredCategory('');
    setEnteredTitle('');
    setEnteredContent('');
    navigation('/');
  };

  return (
    <>
      <hr />

      {/* Create Post Section */}
      <StyledPostForm>
        <div className='post-form'>
          <div className='header'>
            <select
              className='select-category'
              onChange={onInputCategoryHandler}
              value={enteredCategory}
            >
              <option value='' defaultValue>
                카테고리
              </option>
              {categories.map((c, idx) => {
                if (idx === 0) return null;

                return (
                  <option key={c.id} value={c.name}>
                    {c.name}
                  </option>
                );
              })}
            </select>

            <div className='post-title'>
              <input
                type='text'
                placeholder='제목을 입력하세요.'
                value={enteredTitle}
                onChange={onInputTitleHandler}
                required
              />
            </div>
          </div>
          <div className='body'>
            <div className='post-toolbar'>
              <button type='button'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 50 40'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M48.2143 0H1.78571C0.797991 0 0 0.8125 0 1.81818V38.1818C0 39.1875 0.797991 40 1.78571 40H48.2143C49.202 40 50 39.1875 50 38.1818V1.81818C50 0.8125 49.202 0 48.2143 0ZM45.9821 35.9091H4.01786V33.642L11.7467 24.3068L20.1228 34.4205L33.1529 18.6932L45.9821 34.1818V35.9091ZM45.9821 28.5341L33.4933 13.4545C33.3147 13.2386 32.9911 13.2386 32.8125 13.4545L20.1228 28.7727L12.0871 19.0739C11.9085 18.858 11.5848 18.858 11.4062 19.0739L4.01786 27.9943V4.09091H45.9821V28.5341ZM13.3929 16.8182C14.0377 16.8182 14.6763 16.6889 15.2721 16.4376C15.8679 16.1863 16.4093 15.818 16.8653 15.3537C17.3213 14.8894 17.683 14.3382 17.9298 13.7316C18.1766 13.125 18.3036 12.4748 18.3036 11.8182C18.3036 11.1616 18.1766 10.5114 17.9298 9.90476C17.683 9.29814 17.3213 8.74694 16.8653 8.28265C16.4093 7.81836 15.8679 7.45006 15.2721 7.19878C14.6763 6.94751 14.0377 6.81818 13.3929 6.81818C12.0905 6.81818 10.8414 7.34497 9.92046 8.28265C8.99952 9.22033 8.48214 10.4921 8.48214 11.8182C8.48214 13.1443 8.99952 14.416 9.92046 15.3537C10.8414 16.2914 12.0905 16.8182 13.3929 16.8182ZM13.3929 10.2273C14.2578 10.2273 14.9554 10.9375 14.9554 11.8182C14.9554 12.6989 14.2578 13.4091 13.3929 13.4091C12.5279 13.4091 11.8304 12.6989 11.8304 11.8182C11.8304 10.9375 12.5279 10.2273 13.3929 10.2273Z'
                    fill='currentColor'
                  />
                </svg>
                <span>사진</span>
              </button>
              <button type='button'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 54 54'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g clipPath='url(#clip0_37_19)'>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M45 6.75C46.1353 6.74964 47.2288 7.17841 48.0612 7.95037C48.8937 8.72232 49.4036 9.7804 49.4887 10.9125L49.5 11.25V42.75C49.5004 43.8853 49.0716 44.9788 48.2996 45.8112C47.5277 46.6437 46.4696 47.1536 45.3375 47.2388L45 47.25H9C7.8647 47.2504 6.77122 46.8216 5.93877 46.0496C5.10631 45.2777 4.5964 44.2196 4.51125 43.0875L4.5 42.75V11.25C4.49964 10.1147 4.92841 9.02123 5.70037 8.18877C6.47232 7.35631 7.5304 6.8464 8.6625 6.76125L9 6.75H45ZM45 11.25H9V42.75H45V11.25ZM23.265 17.1855L24.4305 17.703L25.191 18.063L26.0617 18.4905L27.0292 18.981L28.0867 19.5435L29.2275 20.1735L29.826 20.5155L30.9915 21.2018L32.058 21.8588L33.0255 22.473L33.8805 23.0422L34.9605 23.7847L35.7795 24.3765L35.9932 24.534C36.3405 24.7924 36.6225 25.1284 36.8168 25.5151C37.0111 25.9019 37.1123 26.3287 37.1123 26.7615C37.1123 27.1943 37.0111 27.6211 36.8168 28.0079C36.6225 28.3946 36.3405 28.7306 35.9932 28.989L35.2665 29.5178L34.2765 30.2108L33.4755 30.7485L32.5642 31.3403L31.545 31.977L30.4222 32.652L29.2207 33.3472L28.0755 33.9817L27.0157 34.5442L26.0482 35.0392L25.1797 35.4622L23.7802 36.1102L23.2627 36.3353C22.8654 36.5065 22.4336 36.5824 22.0018 36.5572C21.5699 36.5319 21.1499 36.4061 20.7753 36.1897C20.4007 35.9733 20.0818 35.6724 19.8441 35.3109C19.6064 34.9494 19.4565 34.5374 19.4062 34.1077L19.2757 32.8365L19.2037 31.995L19.1092 30.501L19.0575 29.358L19.0237 28.1092C19.0197 27.8888 19.0167 27.6683 19.0147 27.4478L19.0102 26.7615C19.0102 26.2957 19.0147 25.8457 19.0237 25.4115L19.0575 24.1628L19.1092 23.022L19.17 21.9937L19.2375 21.0915L19.4062 19.4175C19.4562 18.9873 19.606 18.5748 19.8436 18.2128C20.0813 17.8508 20.4003 17.5494 20.7752 17.3325C21.15 17.1157 21.5704 16.9895 22.0026 16.964C22.4349 16.9384 22.8672 17.0143 23.265 17.1855ZM24.6397 22.8127L23.6587 22.3222L23.5935 23.418L23.544 24.6577L23.5147 26.0303L23.5102 26.7615L23.5147 27.4928L23.544 28.863L23.5665 29.4998L23.625 30.6697L23.6587 31.1985L24.6352 30.708L25.731 30.132L26.9347 29.4705L27.5737 29.106L28.8135 28.3725L29.925 27.684L30.906 27.054L31.347 26.7615L30.4312 26.154L29.3827 25.4925C28.7861 25.1232 28.1838 24.7631 27.576 24.4125L26.9392 24.0503L25.7377 23.3888L24.6397 22.8127Z'
                      fill='currentColor'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_37_19'>
                      <rect width='54' height='54' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
                <span>동영상</span>
              </button>
              <button type='button'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 55 54'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g clipPath='url(#clip0_37_14)'>
                    <path
                      d='M21.8168 6.75C22.5038 6.75008 23.182 6.90178 23.8012 7.19388C24.4204 7.48597 24.9648 7.91099 25.3941 8.4375L28.6025 12.375H45.8335C47.0491 12.375 48.2149 12.8491 49.0744 13.693C49.9339 14.5369 50.4168 15.6815 50.4168 16.875V42.75C50.4168 43.9435 49.9339 45.0881 49.0744 45.932C48.2149 46.7759 47.0491 47.25 45.8335 47.25H9.16683C7.95125 47.25 6.78546 46.7759 5.92592 45.932C5.06638 45.0881 4.5835 43.9435 4.5835 42.75V11.25C4.5835 10.0565 5.06638 8.91193 5.92592 8.06802C6.78546 7.22411 7.95125 6.75 9.16683 6.75H21.8168ZM21.8168 11.25H9.16683V42.75H45.8335V16.875H28.6002C27.9132 16.8749 27.235 16.7232 26.6158 16.4311C25.9966 16.139 25.4522 15.714 25.0229 15.1875L21.8145 11.25H21.8168ZM27.5002 20.25C28.1079 20.25 28.6908 20.4871 29.1206 20.909C29.5504 21.331 29.7918 21.9033 29.7918 22.5V27H34.3752C34.9829 27 35.5658 27.2371 35.9956 27.659C36.4254 28.081 36.6668 28.6533 36.6668 29.25C36.6668 29.8467 36.4254 30.419 35.9956 30.841C35.5658 31.2629 34.9829 31.5 34.3752 31.5H29.7918V36C29.7918 36.5967 29.5504 37.169 29.1206 37.591C28.6908 38.0129 28.1079 38.25 27.5002 38.25C26.8924 38.25 26.3095 38.0129 25.8797 37.591C25.4499 37.169 25.2085 36.5967 25.2085 36V31.5H20.6252C20.0174 31.5 19.4345 31.2629 19.0047 30.841C18.5749 30.419 18.3335 29.8467 18.3335 29.25C18.3335 28.6533 18.5749 28.081 19.0047 27.659C19.4345 27.2371 20.0174 27 20.6252 27H25.2085V22.5C25.2085 21.9033 25.4499 21.331 25.8797 20.909C26.3095 20.4871 26.8924 20.25 27.5002 20.25Z'
                      fill='currentColor'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_37_14'>
                      <rect width='55' height='54' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
                <span>파일</span>
              </button>
              <button type='button'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 50 50'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M20.3978 36.3859L16.7103 39.9692C15.7433 40.9361 14.4319 41.4793 13.0644 41.4793C11.697 41.4793 10.3855 40.9361 9.4186 39.9692C8.45167 39.0023 7.90845 37.6908 7.90845 36.3234C7.90845 34.9559 8.45167 33.6445 9.4186 32.6775L18.8769 23.1984C19.8053 22.267 21.0562 21.7281 22.3707 21.6932C23.6853 21.6583 24.963 22.1301 25.9394 23.0109L26.1894 23.2192C26.5845 23.606 27.117 23.82 27.6699 23.8141C28.2227 23.8082 28.7506 23.583 29.1374 23.1879C29.5241 22.7929 29.7381 22.2604 29.7323 21.7075C29.7264 21.1547 29.5012 20.6268 29.1061 20.24C28.9885 20.088 28.8634 19.942 28.7311 19.8025C26.9527 18.2553 24.6526 17.4418 22.2969 17.5269C19.9411 17.612 17.7058 18.5893 16.0436 20.2609L6.46027 29.74C4.83185 31.5125 3.95115 33.8456 4.00209 36.252C4.05304 38.6584 5.03169 40.9521 6.73367 42.6541C8.43565 44.3561 10.7294 45.3348 13.1358 45.3857C15.5422 45.4366 17.8753 44.556 19.6478 42.9275L23.2519 39.4067C23.6078 39.0185 23.8034 38.5099 23.7995 37.9832C23.7955 37.4566 23.5922 36.951 23.2305 36.5682C22.8688 36.1854 22.3756 35.9537 21.85 35.9199C21.3244 35.8861 20.8056 36.0526 20.3978 36.3859ZM42.6686 6.71919C40.9161 4.97754 38.5456 4 36.0749 4C33.6041 4 31.2336 4.97754 29.4811 6.71919L25.8769 10.24C25.5211 10.6283 25.3254 11.1369 25.3294 11.6635C25.3334 12.1901 25.5367 12.6957 25.8984 13.0785C26.2601 13.4613 26.7533 13.693 27.2789 13.7268C27.8044 13.7606 28.3233 13.5941 28.7311 13.2609L32.3353 9.67752C33.3022 8.71059 34.6137 8.16737 35.9811 8.16737C37.3486 8.16737 38.66 8.71059 39.6269 9.67752C40.5939 10.6445 41.1371 11.9559 41.1371 13.3234C41.1371 14.6908 40.5939 16.0023 39.6269 16.9692L30.1686 26.4484C29.2402 27.3797 27.9894 27.9186 26.6748 27.9535C25.3603 27.9884 24.0826 27.5167 23.1061 26.6359L22.8561 26.4275C22.461 26.0408 21.9285 25.8268 21.3757 25.8326C20.8228 25.8385 20.295 26.0637 19.9082 26.4588C19.5214 26.8538 19.3074 27.3864 19.3133 27.9392C19.3191 28.492 19.5444 29.0199 19.9394 29.4067C20.0908 29.5615 20.2507 29.7075 20.4186 29.8442C22.1992 31.3868 24.4982 32.1972 26.8526 32.1122C29.2069 32.0271 31.4415 31.0529 33.1061 29.3859L42.5853 19.9067C44.338 18.1652 45.3306 15.8009 45.3462 13.3301C45.3618 10.8593 44.3992 8.48271 42.6686 6.71919Z'
                    fill='currentColor'
                  />
                </svg>
                <span>링크</span>
              </button>
            </div>
            <div className='post-content'>
              <textarea
                className='content-box'
                placeholder='내용을 입력하세요.'
                value={enteredContent}
                onChange={onInputContentHandler}
                required
              />
            </div>
          </div>
          <div className='footer'>
            <TagBox tagList={enteredTagList} setTagList={setEnteredTagList} />
            <div className='post-button-container'>
              <button
                type='button'
                className='cancel'
                onClick={cancelPostHandler}
              >
                취소
              </button>
              <div className='create-box'>
                <button type='button' className='temp-create'>
                  <span>임시 저장</span>
                  <span className='count'>0</span>
                </button>
                <button className='create' onClick={submitPostHandler}>
                  등록
                </button>
              </div>
            </div>
          </div>
        </div>
      </StyledPostForm>
    </>
  );
};

export default PostForm;
