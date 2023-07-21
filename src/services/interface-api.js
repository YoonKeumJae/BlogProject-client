import axios from 'axios';

import FIREBASE_URL from '@config/firebase';

/** Category API 호출 추상화 함수
 * [EX - GET] callAPI('get', '/categories.json')
 * [EX - POST] callAPI('post', '/categories.json', category);
 * @param {String} method
 * @param {String} url
 * @param {*} data
 * @returns Response
 */
export default async function callAPI(method, url, data) {
  try {
    const response = await axios[method](FIREBASE_URL + url, data);
    const responseData = await response.data;

    return responseData;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return null;
  }
}
