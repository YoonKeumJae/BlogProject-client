import { convertDataToPostArray } from '@utils/convert';
import callAPI from './interface-api';

/**
 * Post 정보를 받아오기 위한 API
 * @returns Content Data
 */
export const getPostAPI = async () => {
  const responseData = await callAPI('get', '/posts.json');
  return responseData ? convertDataToPostArray(responseData) : [];
};

/**
 * Post 작성 API
 * @param {Object} post 작성한 Post
 * @returns 성공 여부
 */
export const createPostAPI = (post) => callAPI('post', '/posts.json', post);

/**
 * Post 수정 API
 * @param {Object} post 수정된 Post
 * @returns 성공 여부
 */
export const updatePostAPI = (post) =>
  callAPI('put', `/posts/${post.id}.json`, post);

/**
 * Post 삭제 API
 * @param {Integer} id Post Id
 * @returns 성공 여부
 */
export const deletePostAPI = (id) => callAPI('delete', `/posts/${id}.json`);
