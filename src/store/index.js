import { combineReducers } from 'redux';

import category from './category-store';
import content from './content-store';

const rootReducer = combineReducers({
  category,
  content,
});

export default rootReducer;
