import kegListReducer from './keg-list-reducer';
import formVisibleReducer from './form-visible-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisible: formVisibleReducer,
  masterKegList: kegListReducer
});

export default rootReducer;