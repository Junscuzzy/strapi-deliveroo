import { combineReducers } from 'redux'

import counter from './reducers/counterReducer'
import restaurant from './reducers/restaurantReducer'
import cart from './reducers/cartReducer'

const rootReducer = combineReducers({
  counter,
  restaurant,
  cart
})

export default rootReducer
