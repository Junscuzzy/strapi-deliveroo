import { authTypes } from '../actions/types'

const { LOGIN, LOGOUT } = authTypes

const initialState = {
  jwt: '',
  user: {}
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, jwt: action.jwt, user: action.user }
    case LOGOUT:
      return initialState
    default:
      return state
  }
}

export default authReducer
