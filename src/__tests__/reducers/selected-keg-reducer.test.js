import selectedKegReducer from '../../reducers/selected-keg-reducer';
import * as a from '../../actions/index.js'

describe('selectedKegReducer', () => {
let action;
const keg = {
      name: "Beer",
      ingredient: "Wheat",
      processingTime: "1 Day",
      sellPrice: "200",
      pintsLeft: 124,
      id: 1
  }

  test('Should return default state if no action type is recognized', () => {
    expect(selectedKegReducer(null, {type: null})).toEqual(null);
  });

  test('Should set selectedKeg to the keg passed into it', () => {
    action = a.selectKeg(keg)
    expect(selectedKegReducer(null, action)).toEqual({
      name: "Beer",
        ingredient: "Wheat",
        processingTime: "1 Day",
        sellPrice: "200",
        pintsLeft: 124,
        id: 1
    });
  });

});