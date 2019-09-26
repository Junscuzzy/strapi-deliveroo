import { combineReducers } from 'redux'

import counter from './reducers/counterReducer'

const rootReducer = combineReducers({
  counter
})

export default rootReducer
