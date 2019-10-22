import { cartTypes } from '../actions/types'

const { ADD_ITEM, REMOVE_ITEM, CLEAR_CART, LOAD_CART, ORDER } = cartTypes

const initialState = {
  items: [],
  total: 0,
  cmd: {
    status: null,
    error: null
  }
}

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, ...action.cart }
    case REMOVE_ITEM:
      return { ...state, ...action.cart }
    case ORDER:
      return { ...state, cmd: action.cmd }
    case CLEAR_CART:
      return initialState
    case LOAD_CART:
      return action.cart
    default:
      return state
  }
}

export default restaurantReducer
