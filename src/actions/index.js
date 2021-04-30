import * as c from './ActionTypes'

export const addKeg = (keg) => {
  const {name, ingredient, processingTime, sellPrice, pintsLeft, id} = keg;
  return {
    type: c.ADD_KEG,
    name: name,
    ingredient: ingredient,
    processingTime: processingTime,
    sellPrice: sellPrice,
    pintsLeft: pintsLeft,
    id: id
  }
}

export const deleteKeg = id => {
  return {
    type: c.DELETE_KEG,
    id: id
  }
}

export const toggleForm = () => {
  return {
    type: c.TOGGLE_FORM
  }
}

export const selectKeg = (keg) => {
  return {
    type: c.SELECT_KEG,
    keg: keg
  }
}

export const sellPint = (keg) => {
  return {
    type: c.SELL_PINT,
    keg: keg
  }
}