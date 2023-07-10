import axios from 'axios';
import FIREBASE_URL from '@config/firebase';

/**
 * Post 정보를 받아오기 위한 API
 * @returns Content Data
 */
export const getPostAPI = async () => {
  const response = await axios
    .get(`${FIREBASE_URL}/contents.json`)
    // eslint-disable-next-line no-console
    .catch((error) => console.log(error));

  const responseData = await response.data;

  const postsData = [];

  Object.keys(responseData).forEach((key) => {
    postsData.push({
      id: key,
      category: responseData[key].category,
      title: responseData[key].title,
      description: responseData[key].description,
      date: responseData[key].date,
      tagList: responseData[key].tagList,
      username: responseData[key].username,
      article: responseData[key].article,
      like: responseData[key].like,
      comment: responseData[key].comment,
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
    .get(`${FIREBASE_URL}/contents.json`)
    // eslint-disable-next-line no-console
    .catch((error) => console.log(error));

  const responseData = await response.data;

  const postsData = [];

  Object.keys(responseData).forEach((key) => {
    postsData.push({
      id: key,
      category: responseData[key].category,
      title: responseData[key].title,
      description: responseData[key].description,
      date: responseData[key].date,
      tagList: responseData[key].tagList,
      username: responseData[key].username,
      article: responseData[key].article,
      like: responseData[key].like,
      comment: responseData[key].comment,
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

export const createPostAPI = async () => {};
export const createTempPostAPI = async () => {};
export const updatePostAPI = async () => {};
export const deletePostAPI = async () => {};
