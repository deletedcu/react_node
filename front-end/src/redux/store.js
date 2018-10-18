import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'

const middleware = [thunk]
const enhancers = [
  applyMiddleware(...middleware)
]

if(window.devToolsExtension) {
  enhancers.push(window.devToolsExtension())
}

export default createStore(reducer, compose(...enhancers))
