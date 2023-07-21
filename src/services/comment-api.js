import callAPI from './interface-api';

/**
 * Comment 생성 API
 * @param {String} postId 게시글 ID
 * @param {Object} commentForm 생성한 댓글
 * @returns 성공 여부
 */
export const createCommentAPI = (postId, commentForm) =>
  callAPI('post', `/posts/${postId}/comment.json`, commentForm);

/**
 * 댓글 수정 API
 * @param {String} postId 게시글 ID
 * @param {String} commentId 댓글 ID
 * @param {Object} updatedComment 수정된 게시글
 * @returns 성공 여부
 */
export const updateCommentAPI = (postId, commentId, updatedComment) =>
  callAPI('put', `/posts/${postId}/comment/${commentId}.json`, updatedComment);

/**
 * 댓글 삭제 API
 * @param {String} postId 게시글 ID
 * @param {String} commentId 댓글 ID
 * @returns 성공 여부
 */
export const deleteCommentAPI = (postId, commentId) =>
  callAPI('delete', `/posts/${postId}/comment/${commentId}.json`);
