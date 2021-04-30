import kegListReducer from '../../reducers/keg-list-reducer';
import * as c from '../../actions/ActionTypes';
import * as a from '../../actions/index.js'


describe('kegListRecuer', () => {
  let action;
  const kegFormData = {
    name: "Beer",
    ingredient: "Wheat",
    processingTime: "1 Day",
    sellPrice: "200",
    pintsLeft: 124,
    id: 1
  }

  const currentState = {
    1: {
      name: "Beer",
      ingredient: "Wheat",
      processingTime: "1 Day",
      sellPrice: "200",
      pintsLeft: 124,
      id: 1
    },
    2: {
      name: "Pale Ale",
      ingredient: "Hops",
      processingTime: "1-2 Days",
      sellPrice: "300",
      pintsLeft: 124,
      id: 2
    }
  }
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

  test('Should delete a keg from the master keg list', () => {
    action = a.deleteKeg(1)
    expect(kegListReducer(currentState, action)).toEqual({
      2: {
        name: "Pale Ale",
        ingredient: "Hops",
        processingTime: "1-2 Days",
        sellPrice: "300",
        pintsLeft: 124,
        id: 2
      }
    });
  });

});