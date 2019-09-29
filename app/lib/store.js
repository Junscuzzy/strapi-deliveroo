import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

import restaurant from '../reducers/restaurantReducer'
import cart from '../reducers/cartReducer'
import auth from '../reducers/authReducer'

const rootReducer = combineReducers({
  restaurant,
  cart,
  auth,
  form: formReducer
})

export default function store(initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
