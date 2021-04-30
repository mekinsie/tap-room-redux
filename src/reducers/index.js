import kegListReducer from './keg-list-reducer';
import formVisibleReducer from './form-visible-reducer';
import selectedKegReducer from './selected-keg-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisible: formVisibleReducer,
  masterKegList: kegListReducer,
  selectedKeg: selectedKegReducer
});

export default rootReducer;