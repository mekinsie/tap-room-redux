import selectedKegReducer from '../../reducers/selected-keg-reducer';
import * as a from '../../actions/index.js'

let action;
const keglist = {
  ["1"]: {
    name: "Beer",
      ingredient: "Wheat",
      processingTime: "1 Day",
      sellPrice: "200",
      pintsLeft: 124,
      id: 1
  }
}

describe('selectedKegReducer', () => {
  test('Should return default state if no action type is recognized', () => {
    expect(selectedKegReducer(null, {type: null})).toEqual(null);
  });

  test('Should select the correct keg based on id', () => {
    expect(selectedKegReducer(null, { type: 'SELECT_KEG'})).toEqual({
      name: "Beer",
        ingredient: "Wheat",
        processingTime: "1 Day",
        sellPrice: "200",
        pintsLeft: 124,
        id: 1
    });
  });


});