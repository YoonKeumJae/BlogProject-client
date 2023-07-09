/**
 * Category 정보를 받아오기 위한 API
 * @returns API Data
 */
export const getCategoriesAPI = async () => {
  const response = await fetch(
    'https://blog-miniproject-6fc40-default-rtdb.firebaseio.com/categories.json',
  );

  if (!response.ok) return [];
  const responseData = await response.json();

  return responseData;
};

export const createCategoryAPI = async () => {};
export const updateCategoryAPI = async () => {};
export const deleteCategoryAPI = async () => {};
