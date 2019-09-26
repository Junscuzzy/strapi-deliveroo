import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import counter from './reducers/counterReducer'
import restaurant from './reducers/restaurantReducer'
import cart from './reducers/cartReducer'
import auth from './reducers/authReducer'

const rootReducer = combineReducers({
  counter,
  restaurant,
  cart,
  auth,
  form: formReducer
})

export default rootReducer
