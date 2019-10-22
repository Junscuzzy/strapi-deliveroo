import Router from 'next/router'
import axios from 'axios'

import { authTypes } from './types'
import { apiUrl } from '../config/api'
import { setCookie, removeCookie, getCookie } from '../lib/cookie'

const { LOGIN, LOGOUT } = authTypes

export const login = ({ email, password }) => dispatch => {
  axios
    .post(`${apiUrl}/auth/local`, {
      identifier: email,
      password
    })
    .then(({ data }) => {
      setCookie('jwt', data.jwt)
      Router.push('/')
      dispatch({ type: LOGIN, ...data })
    })
    .catch(error => console.log('An error occurred:', error))
}

export const register = ({ username, email, password }) => dispatch => {
  axios
    .post(`${apiUrl}/auth/local/register`, {
      username,
      email,
      password
    })
    .then(({ data }) => {
      setCookie('jwt', data.jwt)
      Router.push('/')
      dispatch({ type: LOGIN, ...data })
    })
    .catch(error => console.log('An error occurred:', error))
}

export const logout = () => {
  removeCookie('jwt')
  return { type: LOGOUT }
}

// gets the token from the cookie and saves it in the store
export const loginFromCookie = jwt => {
  return dispatch => {
    dispatch({ type: LOGIN, jwt })
  }
}

// check if the page is being loaded on the server,
// and if so, get auth token from the cookie
export const checkServerSideAuthCookie = ctx => {
  if (!process.browser || ctx.isServer) {
    // Server
    if (ctx.req.headers.cookie) {
      const jwt = getCookie('jwt', ctx.req)
      ctx.reduxStore.dispatch(loginFromCookie(jwt))
    }
  } else {
    // Browser
    const { jwt } = ctx.reduxStore.getState().auth
    if (jwt && (ctx.pathname === '/login' || ctx.pathname === '/register')) {
      setTimeout(() => Router.push('/'), 0)
    }
  }
}
