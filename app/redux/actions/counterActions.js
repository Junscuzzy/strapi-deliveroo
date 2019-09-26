import { counterTypes } from '../actionsTypes'

export const serverRenderClock = isServer => dispatch => {
  return dispatch({ type: counterTypes.TICK, light: !isServer, ts: Date.now() })
}

export const startClock = dispatch => {
  return setInterval(() => {
    dispatch({ type: counterTypes.TICK, light: true, ts: Date.now() })
  }, 1000)
}

export const incrementCount = () => {
  return { type: counterTypes.INCREMENT }
}

export const decrementCount = () => {
  return { type: counterTypes.DECREMENT }
}

export const resetCount = () => {
  return { type: counterTypes.RESET }
}
