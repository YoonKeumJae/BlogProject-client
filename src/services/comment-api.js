import axios from 'axios';
import FIREBASE_URL from '@config/firebase';

/**
 * Comment 생성 API
 * @param {String} postId 게시글 ID
 * @param {Object} commentForm 생성한 댓글
 * @returns 성공 여부
 */
export const createCommentAPI = async (postId, commentForm) => {
  const response = await axios
    .post(`${FIREBASE_URL}/posts/${postId}/comment.json`, commentForm)
    // eslint-disable-next-line no-console
    .catch((error) => console.log(error));

  return response;
};

/**
 * 댓글 수정 API
 * @param {String} postId 게시글 ID
 * @param {String} commentId 댓글 ID
 * @param {Object} updatedComment 수정된 게시글
 * @returns 성공 여부
 */
export const updateCommentAPI = async (postId, commentId, updatedComment) => {
  const response = await axios
    .put(
      `${FIREBASE_URL}/posts/${postId}/comment/${commentId}.json`,
      updatedComment,
    )
    // eslint-disable-next-line no-console
    .catch((error) => console.log(error));

  return response;
};

/**
 * 댓글 삭제 API
 * @param {String} postId 게시글 ID
 * @param {String} commentId 댓글 ID
 * @returns 성공 여부
 */
export const deleteCommentAPI = async (postId, commentId) => {
  const response = await axios
    .delete(`${FIREBASE_URL}/posts/${postId}/comment/${commentId}.json`)
    // eslint-disable-next-line no-console
    .catch((error) => console.log(error));

  return response;
};
