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
    const commentArray = [];

    const responseComment = responseData[key].comment;

    if (responseComment !== undefined) {
      Object.keys(responseComment).forEach((key2) =>
        commentArray.push({
          id: key2,
          type: responseComment[key2].type,
          profile: responseComment[key2].profile,
          username: responseComment[key2].username,
          content: responseComment[key2].content,
          date: responseComment[key2].date,
        }),
      );
    }

    postsData.push({
      id: key,
      username: responseData[key].username,
      category: responseData[key].category,
      title: responseData[key].title,
      content: responseData[key].content,
      comment: commentArray,
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
    const commentArray = [];

    const responseComment = responseData[key].comment;

    if (responseComment !== undefined) {
      Object.keys(responseComment).forEach((key2) =>
        commentArray.push({
          id: key2,
          type: responseComment[key2].type,
          profile: responseComment[key2].profile,
          username: responseComment[key2].username,
          content: responseComment[key2].content,
          date: responseComment[key2].date,
        }),
      );
    }

    postsData.push({
      id: key,
      username: responseData[key].username,
      category: responseData[key].category,
      title: responseData[key].title,
      content: responseData[key].content,
      comment: commentArray,
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
 * @param {Object} post 작성한 Post
 * @returns 성공 여부
 */
export const createPostAPI = async (post) => {
  const response = await axios
    .post(`${FIREBASE_URL}/posts.json`, post)
    // eslint-disable-next-line no-console
    .catch((error) => console.log(error));

  return response;
};

/**
 * Post 수정 API
 * @param {Object} post 수정된 Post
 * @returns 성공 여부
 */
export const updatePostAPI = async (post) => {
  const response = await axios
    .put(`${FIREBASE_URL}/posts/${post.id}.json`, post)
    // eslint-disable-next-line no-console
    .catch((error) => console.log(error));

  return response;
};

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
