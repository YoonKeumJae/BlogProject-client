import axios from 'axios';
import FIREBASE_URL from '@config/firebase';

/**
 * Category 정보를 받아오기 위한 API
 * @returns API Data
 */
export const getCategoriesAPI = async () => {
  const response = await axios
    .get(`${FIREBASE_URL}/categories.json`)
    // eslint-disable-next-line no-console
    .catch((error) => console.log(error));

  const responseData = await response.data;

  const categoriesData = [];

  Object.keys(responseData).forEach((key) => {
    categoriesData.push({
      id: key,
      name: responseData[key].name,
      count: responseData[key].count,
    });
  });

  return categoriesData;
};

/**
 * Category 생성 API
 * @param {Object} category 생성하는 카테고리
 * @returns 성공 여부
 */
export const createCategoryAPI = async (category) => {
  const response = await axios
    .post(`${FIREBASE_URL}/categories.json`, category)
    // eslint-disable-next-line no-console
    .catch((error) => console.log(error));

  return response;
};

/**
 * Category 수정 API
 * @param {Object} category 수정된 카테고리
 * @returns 성공 여부
 */
export const updateCategoryAPI = async (category) => {
  const response = await axios
    .put(`${FIREBASE_URL}/categories/${category.id}.json`, category)
    // eslint-disable-next-line no-console
    .catch((error) => console.log(error));

  return response;
};

/**
 * Category 삭제 API
 * @param {Integer} id 카테고리 ID
 * @returns 성공 여부
 */
export const deleteCategoryAPI = async (id) => {
  const response = await axios
    .delete(`${FIREBASE_URL}/categories/${id}.json`)
    // eslint-disable-next-line no-console
    .catch((error) => console.log(error));

  return response;
};

/**
 * Category 할당 API
 * @param {Object} updatedCategory Count가 수정된 Categories
 * @returns 성공 여부
 */
export const assignCategoryAPI = async (updatedCategory) => {
  const response = await axios
    .put(`${FIREBASE_URL}/categories.json`, updatedCategory)
    // eslint-disable-next-line no-console
    .catch((error) => console.log(error));

  return response;
};

/**
 * Category 할당 제거 API
 * @param {Object} updatedCategory Count가 수정된 Categories
 * @returns 성공 여부
 */
export const removeAssignCategoryAPI = async (updatedCategory) => {
  const response = await axios
    .put(`${FIREBASE_URL}/categories.json`, updatedCategory)
    // eslint-disable-next-line no-console
    .catch((error) => console.log(error));

  return response;
};
