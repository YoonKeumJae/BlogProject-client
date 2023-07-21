import { createAction, handleActions } from 'redux-actions';

const INIT_POST = 'post/INIT';
const CREATE_POST = 'post/CREATE';
const UPDATE_POST = 'post/UPDATE';
const UPDATE_CATEGORY_IN_POST = 'post-category/UPDATE';
const DELETE_POST = 'post/DELETE';

const CREATE_COMMENT = 'comment/CREATE';
const UPDATE_COMMENT = 'comment/UPDATE';
const DELETE_COMMENT = 'comment/DELETE';

export const initPost = createAction(INIT_POST);
export const createPost = createAction(CREATE_POST);
export const updatePost = createAction(UPDATE_POST);
export const updateCategoryInPost = createAction(UPDATE_CATEGORY_IN_POST);
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
    [INIT_POST]: (state, { payload: posts }) => ({
      ...state,
      items: posts,
      size: posts.length,
    }),
    [CREATE_POST]: (state, { payload: newPost }) => {
      const updatedPosts = state.items;
      updatedPosts.unshift(newPost);

      return {
        ...state,
        items: updatedPosts,
        size: state.size + 1,
      };
    },
    [UPDATE_CATEGORY_IN_POST]: (state, action) => {
      const { name, updatedName } = action.payload;

      return {
        ...state,
        items: state.items.map((item) =>
          item.category === name ? { ...item, category: updatedName } : item,
        ),
      };
    },
    [UPDATE_POST]: (state, { payload: updatedPost }) => ({
      ...state,
      items: state.items.map((item) =>
        item.id === updatedPost.id ? updatedPost : item,
      ),
    }),
    [DELETE_POST]: (state, { payload: deleteId }) => ({
      ...state,
      items: state.items.filter((item) => item.id !== deleteId),
      size: state.size - 1,
    }),
    [CREATE_COMMENT]: (state, { payload }) => {
      const { postId, commentForm } = payload;

      const filteredPost = state.items.filter((item) => item.id === postId);

      const updatedCommentForm = filteredPost[0].comment
        ? filteredPost[0].comment.concat(commentForm)
        : [commentForm];

      return {
        ...state,
        items: state.items.map((item) =>
          item.id === postId
            ? {
                ...item,
                comment: updatedCommentForm,
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
