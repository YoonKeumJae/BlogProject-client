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

export default convertListToQueryURI;
