import { authTypes } from '../actions/types'

const { LOGIN, LOGOUT } = authTypes

const initialState = {
  token: ''
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, token: action.token }
    case LOGOUT:
      return { ...state, token: '' }
    default:
      return state
  }
}

export default authReducer
