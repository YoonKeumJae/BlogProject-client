import callAPI from './interface-api';

/**
 * Category 정보를 받아오기 위한 API
 * @returns API Data
 */
export const getCategoriesAPI = async () => {
  const responseData = await callAPI('get', '/categories.json');
  const filteredData = responseData.filter((data) => data);

  return filteredData;
};

/**
 * Category 생성 API
 * @param {Object} category 생성하는 카테고리
 * @returns 성공 여부
 */
export const createCategoryAPI = (category) =>
  callAPI('put', `/categories/${category.id}.json`, category);

/**
 * Category 수정 API
 * @param {Object} category 수정된 카테고리
 * @returns 성공 여부
 */
export const updateCategoryAPI = (category) =>
  callAPI('patch', `/categories/${category.id}.json`, category);

/**
 * Category 삭제 API
 * @param {Integer} categoryId 카테고리 ID
 * @returns 성공 여부
 */
export const deleteCategoryAPI = (categoryId) =>
  callAPI('delete', `/categories/${categoryId}.json`);
