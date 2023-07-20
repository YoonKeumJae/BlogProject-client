/**
 * Page에 해당하는 Post를 Filtering 해주는 함수
 * @param {Array} posts Post 배열
 * @param {Number} curPage 현재 페이지
 * @param {Number} viewPost 페이지에 보여질 Post의 수
 * @returns Filtering된 Post
 */
function filterPostOnPage(posts, curPage, viewPost) {
  const renderedPost = posts.slice(
    viewPost * curPage - viewPost,
    viewPost * curPage,
  );

  return renderedPost;
}

/**
 * 페이지네이션 함수
 * @param {Array} posts Post 배열
 * @param {Number} viewPost 페이지에 보여질 Post의 수
 * @returns 페이지네이션
 */
function makePageArray(posts, viewPost) {
  const totPage =
    posts.length % viewPost === 0
      ? posts.length / viewPost
      : posts.length / viewPost + 1;
  const pageArray = [];
  for (let i = 1; i <= totPage; i += 1) pageArray.push(i);

  return pageArray;
}

export { filterPostOnPage, makePageArray };
