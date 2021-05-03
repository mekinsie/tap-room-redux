import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('tap room actions', () => {
  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({name: "Beer", ingredient: "Wheat", processingTime: "1 Day", sellPrice: "200", pintsLeft: 124, id: 1})).toEqual({
      type: c.ADD_KEG,
      name: "Beer",
      ingredient: "Wheat",
      processingTime: "1 Day",
      sellPrice: "200",
      pintsLeft: 124,
      id: 1
    });
  });

  it('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: c.DELETE_KEG,
      id: 1
    });
  });

  it('toggleFrom should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  it('selectKeg should create SELECT_KEG action', () => {
    expect(actions.selectKeg({name: "Beer", ingredient: "Wheat", processingTime: "1 Day", sellPrice: "200", pintsLeft: 124, id: 1})).toEqual({
      type: c.SELECT_KEG,
      keg: {name: "Beer", ingredient: "Wheat", processingTime: "1 Day", sellPrice: "200", pintsLeft: 124, id: 1}
    });
  });

  it('sellPint should create SELL_PINT action', () => {
    expect(actions.sellPint({name: "Beer", ingredient: "Wheat", processingTime: "1 Day", sellPrice: "200", pintsLeft: 124, id: 1})).toEqual({
      type: c.SELL_PINT,
      keg: {name: "Beer", ingredient: "Wheat", processingTime: "1 Day", sellPrice: "200", pintsLeft: 124, id: 1}
    });
  });

});




