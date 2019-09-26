import { authTypes } from '../actionsTypes'

export const register = (username, email, password) => ({
  type: authTypes.REGISTER,
  username,
  email,
  password
})

export const login = (email, password) => ({
  type: authTypes.LOGIN,
  email,
  password
})

export const logout = () => ({ type: authTypes.LOGOUT })
