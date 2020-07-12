import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware  from 'redux-thunk';
import { logger } from 'redux-logger';
import customersReducer from './customers/customersReducer'
import customerDetailsReducer from './customerDetails/customerDetailsReducer'

const rootReducer = combineReducers({
  customers: customersReducer,
  customerDetails: customerDetailsReducer
})

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
)

export default store