import Cookies from 'js-cookie'

import { cartTypes } from '../actionsTypes'

const initialState = {
  items: [],
  total: 0
}

const tmp = {
  items: [],
  index: null,
  state: {}
}

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartTypes.ADD_ITEM:
      tmp.state = {
        // check for item already in cart
        items: state.items.find(i => i.id === action.item.id)
          ? [
              // if item is found increase quanity ++
              ...state.items.map(el =>
                el.id === action.item.id
                  ? { ...el, quantity: el.quantity + 1 }
                  : el
              )
            ]
          : [
              // if not in cart, add item
              ...state.items,
              { ...action.item, quantity: 1 }
            ],
        total: state.total + action.item.price
      }
      Cookies.set('cart', tmp.state)
      return tmp.state
    case cartTypes.REMOVE_ITEM:
      tmp.items = [...state.items]
      tmp.index = tmp.items.findIndex(i => i.id === action.item.id)
      tmp.items.splice(tmp.index, 1)
      tmp.state = {
        // check for item already in cart
        items:
          state.items.find(i => i.id === action.item.id).quantity > 1
            ? [
                // if item is found decrease quanity --
                ...state.items.map(el =>
                  el.id === action.item.id
                    ? { ...el, quantity: el.quantity - 1 }
                    : el
                )
              ]
            : [...tmp.items],
        total: state.total - action.item.price
      }
      Cookies.set('cart', tmp.state)
      return tmp.state
    default:
      return state
  }
}

export default restaurantReducer
