import { createAction, handleActions } from 'redux-actions';

const INIT_POST = 'post/INIT';
const CREATE_POST = 'post/CREATE';
const UPDATE_POST = 'post/UPDATE';
const UPDATE_POST_CATEGORY = 'post_category/UPDATE';
const DELETE_POST = 'post/DELETE';

const CREATE_COMMENT = 'comment/CREATE';
const UPDATE_COMMENT = 'comment/UPDATE';
const DELETE_COMMENT = 'comment/DELETE';

export const initPost = createAction(INIT_POST);
export const createPost = createAction(CREATE_POST);
export const updatePost = createAction(UPDATE_POST);
export const updatePostCategory = createAction(UPDATE_POST_CATEGORY);
export const deletePost = createAction(DELETE_POST);

export const createComment = createAction(CREATE_COMMENT);
export const updateComment = createAction(UPDATE_COMMENT);
export const deleteComment = createAction(DELETE_COMMENT);

const initialPost = {
  items: [],
  filterMode: 'category',
  size: 0,
};

const contentReducer = handleActions(
  {
    [INIT_POST]: (state, action) => ({
      ...state,
      items: action.payload,
      size: action.payload.length,
    }),
    [CREATE_POST]: (state, action) => {
      const updatedPosts = state.items;
      updatedPosts.unshift(action.payload);

      return {
        ...state,
        items: updatedPosts,
        size: state.size + 1,
      };
    },
    [UPDATE_POST_CATEGORY]: (state, action) => {
      const { name, updatedName } = action.payload;

      return {
        ...state,
        items: state.items.map((item) =>
          item.category === name ? { ...item, category: updatedName } : item,
        ),
      };
    },
    [UPDATE_POST]: (state, action) => ({
      ...state,
      items: state.items.map((item) =>
        item.id === action.payload.id ? action.payload : item,
      ),
    }),
    [DELETE_POST]: (state, action) => ({
      ...state,
      items: state.items.filter((item) => item.id !== action.payload),
      size: state.size - 1,
    }),
    [CREATE_COMMENT]: (state, action) => {
      const newCommentForm = state.items.filter(
        (item) => item.id === action.payload.postId,
      );

      const updtaedCommentForm = newCommentForm[0].comment.concat(
        action.payload.commentForm,
      );

      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.postId
            ? {
                ...item,
                comment: updtaedCommentForm,
              }
            : item,
        ),
      };
    },
    [UPDATE_COMMENT]: (state, action) => {
      const { postId, commentId, enteredContent } = action.payload;

      const filteredPost = state.items.filter((item) => item.id === postId);
      const filteredComment = filteredPost[0].comment.map((c) =>
        c.id === commentId ? { ...c, content: enteredContent } : c,
      );

      return {
        ...state,
        items: state.items.map((item) =>
          item.id === postId ? { ...item, comment: filteredComment } : item,
        ),
      };
    },
    [DELETE_COMMENT]: (state, action) => {
      const { postId, commentId } = action.payload;

      const filteredPost = state.items.filter((item) => item.id === postId);
      const filteredComment = filteredPost[0].comment.filter(
        (c) => c.id !== commentId,
      );

      return {
        ...state,
        items: state.items.map((item) =>
          item.id === postId ? { ...item, comment: filteredComment } : item,
        ),
      };
    },
  },
  initialPost,
);

export default contentReducer;
