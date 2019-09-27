import { cartTypes } from '../actionsTypes'

const { ADD_ITEM, REMOVE_ITEM, CLEAR_CART, LOAD_CART } = cartTypes

const initialState = {
  items: [],
  total: 0
}

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, ...action.cart }
    case REMOVE_ITEM:
      return { ...state, ...action.cart }
    case CLEAR_CART:
      return initialState
    case LOAD_CART:
      return action.cart
    default:
      return state
  }
}

export default restaurantReducer
