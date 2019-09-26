import { cartTypes } from '../actionsTypes'

export const addItem = id => ({ type: cartTypes.ADD_ITEM, id })
export const removeItem = id => ({ type: cartTypes.REMOVE_ITEM, id })
export const getTotal = () => ({ type: cartTypes.GET_TOTAL })
