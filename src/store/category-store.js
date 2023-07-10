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
};

const categoryReducer = handleActions(
  {
    [INIT_CATEGORIES]: (state, action) => ({
      ...state,
      items: action.payload,
    }),
    [CHANGE_CATEGORY]: (state, action) => ({
      ...state,
      current: action.payload,
    }),
    [CREATE_CATEGORY]: (state, action) => ({
      ...state,
      items: state.items.concat(action.payload),
    }),
    [UPDATE_CATEGORY]: (state, action) => ({
      ...state,
      items: state.items.map((item) =>
        item.id === action.payload.id ? action.payload : item,
      ),
    }),
    [DELETE_CATEGORY]: (state, action) => ({
      ...state,
      items: state.items.filter((category) => category.id !== action.payload),
    }),
  },
  initialCategory,
);

export default categoryReducer;
