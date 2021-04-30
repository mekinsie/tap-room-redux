import kegListReducer from './keg-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  // formVisibleOnPage: formVisibleReducer,
  masterKegList: kegListReducer
});

export default rootReducer;