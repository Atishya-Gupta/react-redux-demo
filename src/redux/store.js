import { createStore } from 'redux'
import cakeReducer from './cake/cakeReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(cakeReducer, composeWithDevTools())

export default store
