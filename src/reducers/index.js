import { combineReducers } from 'redux';

import reducerClick from '../reducers/reducer_click'

const rootReducer = combineReducers({
  click: reducerClick
});

export default rootReducer;
