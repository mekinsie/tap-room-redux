import * as c from './../actions/ActionTypes';

export default (state = null, action ) => {
  const{ keg } = action;
  switch(action.type){
  case c.SELECT_KEG:
    return keg;
  case c.SELL_PINT:
    let newKeg = {...keg}
    newKeg.pintsLeft -= 1
    return newKeg;
  default:
    return state;
  }
}