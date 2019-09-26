import { actionTypes } from '../actionsTypes'

const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0
}

const counterReducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.TICK:
      return { ...state, lastUpdate: action.ts, light: !!action.light }
    case actionTypes.INCREMENT:
      return { ...state, count: state.count + 1 }
    case actionTypes.DECREMENT:
      return { ...state, count: state.count - 1 }
    case actionTypes.RESET:
      return { ...state, count: exampleInitialState.count }
    default:
      return state
  }
}

export default counterReducer
