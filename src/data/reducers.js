import { combineReducers } from 'redux';

import uiReducer from '../modules/ui/data/reducer';

export default combineReducers({
  ui: uiReducer,
});
