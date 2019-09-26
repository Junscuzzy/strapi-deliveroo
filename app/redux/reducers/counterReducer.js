import { counterTypes } from '../actionsTypes'

const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0
}

const counterReducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case counterTypes.TICK:
      return { ...state, lastUpdate: action.ts, light: !!action.light }
    case counterTypes.INCREMENT:
      return { ...state, count: state.count + 1 }
    case counterTypes.DECREMENT:
      return { ...state, count: state.count - 1 }
    case counterTypes.RESET:
      return { ...state, count: exampleInitialState.count }
    default:
      return state
  }
}

export default counterReducer
