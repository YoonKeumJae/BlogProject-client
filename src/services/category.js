/**
 * Category 정보를 받아오기 위한 API
 * @returns API Data
 */
export const getCategories = async () => {
  const response = await fetch(
    'https://blog-miniproject-6fc40-default-rtdb.firebaseio.com/categories.json',
  );

  if (!response.ok) return [];
  const responseData = await response.json();

  return responseData;
};

export const createCategory = async () => {};
export const updateCategory = async () => {};
export const deleteCategory = async () => {};
