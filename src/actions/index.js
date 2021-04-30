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

