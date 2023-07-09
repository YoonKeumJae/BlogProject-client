/**
 * Content 정보를 받아오기 위한 API
 * @returns Content Data
 */
export const getPostAPI = async () => {
  const response = await fetch(
    'https://blog-miniproject-6fc40-default-rtdb.firebaseio.com/contents.json',
  );

  if (!response.ok) return [];
  const responseData = await response.json();

  return responseData;
};

export const getQueryPostAPI = async () => {};

export const createPostAPI = async () => {};
export const createTempPostAPI = async () => {};
export const updatePostAPI = async () => {};
export const deletePostAPI = async () => {};
