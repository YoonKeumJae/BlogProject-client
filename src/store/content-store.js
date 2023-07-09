import { createAction, handleActions } from 'redux-actions';

const INIT_CONTENT = 'content/INIT';
const CREATE_CONTENT = 'content/CREATE';
const UPDATE_CONTENT = 'content/UPDATE';
const UPDATE_CONTENT_CATEGORY = 'content_category/UPDATE';
const DELETE_CONTENT = 'content/DELETE';

export const initContent = createAction(INIT_CONTENT);
export const createContent = createAction(CREATE_CONTENT);
export const updateContent = createAction(UPDATE_CONTENT);
export const updateContentCategory = createAction(UPDATE_CONTENT_CATEGORY);
export const deleteContent = createAction(DELETE_CONTENT);

const initialContent = {
  items: [],
};

const contentReducer = handleActions(
  {
    [INIT_CONTENT]: (state, action) => ({
      ...state,
      items: action.payload,
    }),
    [CREATE_CONTENT]: () => ({}),
    [UPDATE_CONTENT_CATEGORY]: (state, action) => {
      const { prevName, newName } = action.payload;

      return {
        ...state,
        items: state.items.map((item) =>
          item.category === prevName ? { ...item, category: newName } : item,
        ),
      };
    },
    [UPDATE_CONTENT]: () => ({}),
    [DELETE_CONTENT]: () => ({}),
  },
  initialContent,
);

export default contentReducer;
