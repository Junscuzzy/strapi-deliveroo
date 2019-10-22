// import Router from 'next/router'
import axios from 'axios'
import Router from 'next/router'

import { cartTypes } from './types'
import { setCookie, removeCookie, getCookie } from '../lib/cookie'
import { apiUrl } from '../config/api'

const { ADD_ITEM, REMOVE_ITEM, CLEAR_CART, LOAD_CART, ORDER } = cartTypes

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

export const createOrder = ({ stripe, values }) => (dispatch, getState) => {
  const {
    cart: { items, total },
    auth: { token: authToken }
  } = getState()
  stripe
    .createToken({
      name: values.name,
      address_line1: values.address,
      address_city: values.city,
      address_state: values.state
    })
    .then(({ token }) =>
      axios
        .post(
          `${apiUrl}/orders`,
          {
            token: token.id,
            ref: token.card.id,
            address: values.address,
            city: values.city,
            amount: total,
            dishes: items
          },
          {
            headers: {
              Authorization: `Bearer ${authToken}`
            }
          }
        )
        .then(({ statusText }) => {
          dispatch(clearCart())
          dispatch({ type: ORDER, status: statusText })
          Router.push('/')
        })
        .catch(() => dispatch({ type: ORDER, status: 'failed' }))
    )
    .catch(() => dispatch({ type: ORDER, status: 'failed' }))
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
