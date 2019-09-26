import { cartTypes } from '../actionsTypes'

export const addItem = item => ({ type: cartTypes.ADD_ITEM, item })
export const removeItem = item => ({ type: cartTypes.REMOVE_ITEM, item })
