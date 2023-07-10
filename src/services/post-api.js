import axios from 'axios';
import FIREBASE_URL from '@config/firebase';

/**
 * Post 정보를 받아오기 위한 API
 * @returns Content Data
 */
export const getPostAPI = async () => {
  const response = await axios
    .get(`${FIREBASE_URL}/posts.json`)
    // eslint-disable-next-line no-console
    .catch((error) => console.log(error));

  const responseData = await response.data;

  const postsData = [];

  Object.keys(responseData).forEach((key) => {
    postsData.push({
      id: key,
      username: responseData[key].username,
      category: responseData[key].category,
      title: responseData[key].title,
      content: responseData[key].content,
      comment: responseData[key].comment,
      tagList: responseData[key].tagList,
      like: responseData[key].like,
      date: responseData[key].date,
    });
  });

  return postsData;
};

/**
 * Query에 해당하는 Post 정보를 받아오기 위한 API
 * @param {String} type 검색 타입
 * @param {String} query 검색어
 * @returns Query에 해당하는 Post
 */
export const getQueryPostAPI = async (type, query) => {
  const response = await axios
    .get(`${FIREBASE_URL}/posts.json`)
    // eslint-disable-next-line no-console
    .catch((error) => console.log(error));

  const responseData = await response.data;

  const postsData = [];

  Object.keys(responseData).forEach((key) => {
    postsData.push({
      id: key,
      username: responseData[key].username,
      category: responseData[key].category,
      title: responseData[key].title,
      content: responseData[key].content,
      comment: responseData[key].comment,
      tagList: responseData[key].tagList,
      like: responseData[key].like,
      date: responseData[key].date,
    });
  });

  if (query.trim().length === 0) return postsData;

  let filteredPosts = [];

  if (type === 'title')
    filteredPosts = postsData.filter(
      (post) => post.title.toLowerCase().indexOf(query) !== -1,
    );
  if (type === 'content')
    filteredPosts = postsData.filter((post) =>
      post.description.toLowerCase().includes(query),
    );

  return filteredPosts;
};

/**
 * Post 작성 API
 * @param {Object} post Post 폼
 * @returns 성공 여부
 */
export const createPostAPI = async (post) => {
  const response = await axios
    .post(`${FIREBASE_URL}/posts.json`, post)
    // eslint-disable-next-line no-console
    .catch((error) => console.log(error));

  return response;
};

export const updatePostAPI = async () => {};

/**
 * Post 삭제 API
 * @param {Integer} id Post Id
 * @returns 성공 여부
 */
export const deletePostAPI = async (id) => {
  const response = await axios
    .delete(`${FIREBASE_URL}/posts/${id}.json`)
    // eslint-disable-next-line no-console
    .catch((error) => console.log(error));

  return response;
};
