import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from 'state';
import Immutable from 'immutable'
import thunk from 'redux-thunk'

let store = {}

if (process.browser) {
  const initialState = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
    serialize: { immutable: Immutable }
  })
  
   store = createStore(rootReducer, initialState, compose(
    applyMiddleware(thunk)
  ))
} else {
   store = createStore(rootReducer, {}, compose(
    applyMiddleware(thunk)
  ))
}

export default store
