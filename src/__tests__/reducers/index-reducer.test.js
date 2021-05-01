import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import kegListReducer from '../../reducers/keg-list-reducer';
import selectedKegReducer from '../../reducers/selected-keg-reducer';
import * as a from '../../actions/ActionTypes.js'


describe("rootReducer", () => {
  let store = createStore(rootReducer);

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, {type: null})).toEqual({
      masterKegList: {},
      formVisible: false,
      selectedKeg: null
    });
  });

  test('Check that initial state of kegListReducer matches root reducer', () => {
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, { type: null }));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisible).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Check that initial state of selectedKegReducer matches root reducer', () => {
    expect(store.getState().selectedKeg).toEqual(selectedKegReducer(undefined, { type: null }));
  });

  test('Check that ADD_KEG action works for KegListReducer and root reducer', () => {
    const action = {
      type: a.ADD_KEG,
      name: "Beer",
      ingredient: "Wheat",
      processingTime: "1 Day",
      sellPrice: "200",
      pintsLeft: 124,
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, action));
  });

  test('Check that TOGGLE_FORM action works for formVisibleReducer and root reducer', () => {
    const action = {
      type: a.TOGGLE_FORM
    }
    store.dispatch(action);
    expect(store.getState().formVisible).toEqual(formVisibleReducer(undefined, action));
  });

  test('Check that SELECT_KEG action works for selectedKegReducer and root reducer', () => {
    const action = {
      type: a.SELECT_KEG,
      keg: {name: "Beer",
      ingredient: "Wheat",
      processingTime: "1 Day",
      sellPrice: "200",
      pintsLeft: 124,
      id: 1
      }
    }
    store.dispatch(action);
    expect(store.getState().selectedKeg).toEqual(selectedKegReducer(undefined, action));
  });

});