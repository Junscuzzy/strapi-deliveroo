import Cookies from 'js-cookie'
import Router from 'next/router'

import { strapi } from './api'

export const setToken = token => {
  if (!process.browser) {
    return
  }
  Cookies.set('username', token.user.username)
  Cookies.set('jwt', token.jwt)

  if (Cookies.get('username')) {
    Router.push('/')
  }
}

export const unsetToken = () => {
  if (!process.browser) {
    return
  }
  Cookies.remove('jwt')
  Cookies.remove('username')
  Cookies.remove('cart')

  // to support logging out from all windows
  window.localStorage.setItem('logout', Date.now())
  Router.push('/')
}

export const strapiRegister = (username, email, password) => {
  if (!process.browser) {
    return undefined
  }
  strapi.register(username, email, password).then(res => {
    setToken(res)
  })
  return Promise.resolve()
}

/**
 * use Strapi to get a JWT and token object
 * then save to appropriate cookie for future requests
 */
export const strapiLogin = (email, password) => {
  if (!process.browser) {
    return
  }
  strapi.login(email, password).then(res => {
    setToken(res)
  })
  return Promise.resolve()
}

export const getUserFromServerCookie = req => {
  if (!req.headers.cookie || '') {
    return undefined
  }

  const usernameCookie = req.headers.cookie
    .split(';')
    .find(user => user.trim().startsWith('username='))

  const [, username] = usernameCookie ? usernameCookie.split('=') : ['', '']

  const jwtCookie = req.headers.cookie
    .split(';')
    .find(c => c.trim().startsWith('jwt='))
  if (!jwtCookie) {
    return undefined
  }
  return username
}

export const getUserFromLocalCookie = () => {
  return Cookies.get('username')
}
