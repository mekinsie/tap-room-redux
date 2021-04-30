import kegListReducer from '../../reducers/keg-list-reducer';
import * as c from '../../actions/ActionTypes';
import * as a from '../../actions/index.js'

let action;
const kegFormData = {
  name: "Beer",
  ingredient: "Wheat",
  processingTime: "1 Day",
  sellPrice: "200",
  pintsLeft: 124,
  id: 1
}

describe('kegListRecuer', () => {
  test('Should return default state if no action type is recognized', () => {
    expect(kegListReducer({}, {type: null})).toEqual({});
  });

test('Should add a keg to the master keg list', () => {
  action = a.addKeg(kegFormData)
  expect(kegListReducer({}, action)).toEqual({
    [1] : {
      name: "Beer",
      ingredient: "Wheat",
      processingTime: "1 Day",
      sellPrice: "200",
      pintsLeft: 124,
      id: 1
    }
  });
});


});