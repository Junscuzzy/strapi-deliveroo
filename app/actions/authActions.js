import Router from 'next/router'

import { authTypes } from './types'
import { strapi } from '../config/api'
import { setCookie, removeCookie, getCookie } from '../lib/cookie'

const { LOGIN, LOGOUT } = authTypes

export const login = ({ email, password }) => dispatch => {
  strapi
    .login(email, password)
    .then(({ jwt }) => {
      setCookie('token', jwt)
      Router.push('/')
      dispatch({ type: LOGIN, token: jwt })
    })
    .catch(err => console.log(err))
}

export const register = ({ username, email, password }) => dispatch => {
  strapi
    .register(username, email, password)
    .then(({ jwt }) => {
      setCookie('token', jwt)
      Router.push('/')
      dispatch({ type: LOGIN, token: jwt })
    })
    .catch(err => console.log(err))
}

export const logout = () => {
  removeCookie('token')
  return { type: LOGOUT }
}

// gets the token from the cookie and saves it in the store
export const loginFromCookie = token => {
  return dispatch => {
    dispatch({ type: LOGIN, token })
  }
}

// check if the page is being loaded on the server,
// and if so, get auth token from the cookie
export const checkServerSideAuthCookie = ctx => {
  if (!process.browser || ctx.isServer) {
    // Server
    if (ctx.req.headers.cookie) {
      const token = getCookie('token', ctx.req)
      ctx.reduxStore.dispatch(loginFromCookie(token))
    }
  } else {
    // Browser
    const { token } = ctx.reduxStore.getState().auth
    if (token && (ctx.pathname === '/login' || ctx.pathname === '/register')) {
      setTimeout(() => Router.push('/'), 0)
    }
  }
}
