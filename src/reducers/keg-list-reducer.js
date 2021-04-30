import * as c from './../actions/ActionTypes';

export default(state = {}, action) => {
const {name, ingredient, processingTime, sellPrice, pintsLeft, id} = action;
switch(action.type) {
  case c.ADD_KEG:
    return Object.assign({}, state, {
      [id]: {
        name: name,
        ingredient: ingredient,
        processingTime: processingTime,
        sellPrice: sellPrice,
        pintsLeft: pintsLeft,
        id: id
      }
    });
  case c.DELETE_KEG:
    let newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
}