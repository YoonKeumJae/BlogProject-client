import { createAction, handleActions } from 'redux-actions';

const INIT_CATEGORIES = 'category/INIT';
const CHANGE_CATEGORY = 'category/CHANGE';
const CREATE_CATEGORY = 'category/CREATE';
const UPDATE_CATEGORY = 'category/UPDATE';
const DELETE_CATEGORY = 'category/DELETE';

export const initCategories = createAction(INIT_CATEGORIES);
export const changeCategory = createAction(CHANGE_CATEGORY);
export const createCategory = createAction(CREATE_CATEGORY);
export const updateCategory = createAction(UPDATE_CATEGORY);
export const deleteCategory = createAction(DELETE_CATEGORY);

const initialCategory = {
  current: '전체글',
  items: [],
  size: 0,
};

const categoryReducer = handleActions(
  {
    [INIT_CATEGORIES]: (state, { payload: categories }) => ({
      ...state,
      items: categories,
      size: categories.length,
    }),
    [CHANGE_CATEGORY]: (state, { payload: category }) => ({
      ...state,
      current: category,
    }),
    [CREATE_CATEGORY]: (state, { payload: category }) => ({
      ...state,
      items: state.items.concat(category),
      size: state.size + 1,
    }),
    [UPDATE_CATEGORY]: (state, { payload }) => ({
      ...state,
      items: state.items.map((item) =>
        item.id === payload.id ? { ...item, name: payload.updatedName } : item,
      ),
    }),
    [DELETE_CATEGORY]: (state, { payload: deleteId }) => ({
      ...state,
      items: state.items.filter((category) => category.id !== deleteId),
      size: state.size - 1,
    }),
  },
  initialCategory,
);

export default categoryReducer;
