/** Post 객체를 배열로 변환해주는 함수
 * @param {Object} data Post 객체
 * @returns Post 배열
 */
function convertDataToPostArray(data) {
  const postsData = [];

  Object.keys(data).forEach((key) => {
    const { comment, username, category, title, content, tagList, like, date } =
      data[key];
    const commentArray = [];

    if (comment !== undefined) {
      Object.keys(comment).forEach((key2) =>
        commentArray.push({
          id: key2,
          type: comment[key2].type,
          profile: comment[key2].profile,
          username: comment[key2].username,
          content: comment[key2].content,
          date: comment[key2].date,
        }),
      );
    }

    postsData.push({
      id: key,
      username,
      category,
      title,
      content,
      comment: commentArray,
      tagList,
      like,
      date,
    });
  });

  return postsData;
}

/** Category 객체를 배열로 변환해주는 함수
 * @param {Object} data Category 객체
 * @returns Category 배열
 */
function convertDataToCategoryArray(data) {
  const categoriesData = [];

  Object.keys(data).forEach((key) => {
    categoriesData.push({
      id: key,
      name: data[key].name,
      count: data[key].count,
    });
  });

  return categoriesData;
}

/** Query 검색 URI을 반환해주는 함수
 * @param {Array} queryList 기존의 Query 배열
 * @param {Array} updatedQuery [Key, Value]로 구성된 새로운 Query
 * @returns 업데이트된 Query URI
 */
function convertListToQueryURI(queryList, updatedQuery) {
  const [queryType, queryValue] = updatedQuery;
  let uri = '/search?';

  const uniqueQueryMap = new Map();

  if (queryList.length > 0) {
    queryList.forEach((query) => {
      const [key, value] = query;
      uniqueQueryMap.set(key, value);
    });
  }

  if (queryType === 'content' || queryType === 'title') {
    uniqueQueryMap.delete('content');
    uniqueQueryMap.delete('title');
  }

  uniqueQueryMap.set(queryType, queryValue);
  uniqueQueryMap.forEach((query, type) => {
    uri += `${type}=${query}&`;
  });

  return uri.slice(0, -1);
}

export {
  convertDataToPostArray,
  convertDataToCategoryArray,
  convertListToQueryURI,
};
