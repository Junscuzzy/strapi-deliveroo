import { cartTypes } from './types'
import { setCookie, removeCookie, getCookie } from '../lib/cookie'

const { ADD_ITEM, REMOVE_ITEM, CLEAR_CART, LOAD_CART } = cartTypes

export const addItem = item => (dispatch, getState) => {
  const { items, total } = getState().cart
  const cart = {
    // check for item already in cart
    items: items.find(el => el.id === item.id)
      ? // if item is found increase quanity ++
        items.map(el =>
          el.id === item.id ? { ...el, quantity: el.quantity + 1 } : el
        )
      : // if not in cart, add item
        [...items, { ...item, quantity: 1 }],
    total: total + item.price
  }

  setCookie('cart', cart)
  dispatch({ type: ADD_ITEM, cart })
}

export const removeItem = item => (dispatch, getState) => {
  const { items, total } = getState().cart
  const cart = {
    items: [],
    total: total - item.price
  }

  // check for item already in cart
  if (items.find(el => el.id === item.id).quantity > 1) {
    // if item is found decrease quanity --
    cart.items = items.map(el =>
      el.id === item.id ? { ...el, quantity: el.quantity - 1 } : el
    )
  } else {
    // Get removing item index key to remove it from items list
    const index = items.findIndex(i => i.id === item.id)
    items.splice(index, 1)
    cart.items = items
  }

  setCookie('cart', cart)
  dispatch({ type: REMOVE_ITEM, cart })
}

// Remove cart from cookie and store
export const clearCart = () => dispatch => {
  removeCookie('cart')
  dispatch({ type: CLEAR_CART })
}

// Get cart from the cookie and save it in the store
export const loadCartFromCookie = cart => dispatch => {
  dispatch({ type: LOAD_CART, cart })
}

// Check if the page is being loaded on the server
// and if so, get cart from cookie
export const checkServerSideCartCookie = ctx => {
  if (!process.browser || ctx.isServer) {
    // Server
    if (ctx.req.headers.cookie) {
      const cart = getCookie('cart', ctx.req)
      ctx.reduxStore.dispatch(loadCartFromCookie(JSON.parse(cart)))
    }
  }
}
