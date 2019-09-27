import cookie from 'js-cookie'

/**
 * cookie helper methods
 */

export const setCookie = (key, value) => {
  if (process.browser) {
    cookie.set(key, value, {
      expires: 1,
      path: '/'
    })
  }
}

export const removeCookie = key => {
  if (process.browser) {
    cookie.remove(key, {
      expires: 1
    })
  }
}

const getCookieFromBrowser = key => {
  return cookie.get(key)
}

// Use cookie-parser in ./server.js
const getCookieFromServer = (key, req) => {
  const { cookies } = req
  if (!cookies) {
    return undefined
  }
  return cookies[key]
}

export const getCookie = (key, req) => {
  return process.browser
    ? getCookieFromBrowser(key)
    : getCookieFromServer(key, req)
}
