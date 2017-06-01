import { combineReducers } from 'redux';

import uiReducer from '../modules/ui/data/reducer';
import chatReducer from '../modules/chat/data/reducer';

export default combineReducers({
  ui: uiReducer,
  chat: chatReducer,
});
