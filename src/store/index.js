import { combineReducers } from 'redux';

import category from './category-store';
import post from './post-store';

const rootReducer = combineReducers({
  category,
  post,
});

export default rootReducer;
