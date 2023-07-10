import { createAction, handleActions } from 'redux-actions';

const INIT_POST = 'post/INIT';
const REPLACE_POST = 'post/REPLACE';
const CREATE_POST = 'post/CREATE';
const UPDATE_POST = 'post/UPDATE';
const UPDATE_POST_CATEGORY = 'post_category/UPDATE';
const DELETE_POST = 'post/DELETE';

export const initPost = createAction(INIT_POST);
export const replacePost = createAction(REPLACE_POST);
export const createPost = createAction(CREATE_POST);
export const updatePost = createAction(UPDATE_POST);
export const updatePostCategory = createAction(UPDATE_POST_CATEGORY);
export const deletePost = createAction(DELETE_POST);

const initialPost = {
  items: [],
  filterMode: 'category',
};

const contentReducer = handleActions(
  {
    [INIT_POST]: (state, action) => ({
      ...state,
      items: action.payload,
    }),
    [REPLACE_POST]: (state, action) => ({
      items: action.payload.postsData,
      filterMode: action.payload.mode,
    }),
    [CREATE_POST]: (state, action) => ({
      ...state,
      items: state.items.concat(action.payload),
    }),
    [UPDATE_POST_CATEGORY]: (state, action) => {
      const { name, updatedName } = action.payload;

      return {
        ...state,
        items: state.items.map((item) =>
          item.category === name ? { ...item, category: updatedName } : item,
        ),
      };
    },
    [UPDATE_POST]: () => ({}),
    [DELETE_POST]: (state, action) => ({
      ...state,
      items: state.items.filter((item) => item.id !== action.payload),
    }),
  },
  initialPost,
);

export default contentReducer;
