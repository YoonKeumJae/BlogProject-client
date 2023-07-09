import { createAction, handleActions } from 'redux-actions';

const INIT_POST = 'post/INIT';
const CREATE_POST = 'post/CREATE';
const UPDATE_POST = 'post/UPDATE';
const UPDATE_POST_CATEGORY = 'post_category/UPDATE';
const DELETE_POST = 'post/DELETE';

export const initPost = createAction(INIT_POST);
export const createPost = createAction(CREATE_POST);
export const updatePost = createAction(UPDATE_POST);
export const updatePostCategory = createAction(UPDATE_POST_CATEGORY);
export const deletePost = createAction(DELETE_POST);

const initialPost = {
  items: [],
  total: 0,
};

const contentReducer = handleActions(
  {
    [INIT_POST]: (state, action) => ({
      ...state,
      items: action.payload,
    }),
    [CREATE_POST]: (state, action) => {
      const item = { ...action.payload, id: `content${state.items.length}` };

      return {
        ...state,
        items: state.items.concat(item),
      };
    },
    [UPDATE_POST_CATEGORY]: (state, action) => {
      const { prevName, newName } = action.payload;

      return {
        ...state,
        items: state.items.map((item) =>
          item.category === prevName ? { ...item, category: newName } : item,
        ),
      };
    },
    [UPDATE_POST]: () => ({}),
    [DELETE_POST]: () => ({}),
  },
  initialPost,
);

export default contentReducer;
