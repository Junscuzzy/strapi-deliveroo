import { authTypes } from '../actionsTypes'
// import { strapi } from '../../config'

const initialState = {
  isAuth: false,
  token: '',
  username: ''
}

const authReducer = (state = initialState, action) => {
  console.log({ action })
  switch (action.type) {
    case authTypes.REGISTER:
      return state
    case authTypes.LOGIN:
      return state
    case authTypes.LOGOUT:
      return initialState
    default:
      return state
  }
}

export default authReducer
