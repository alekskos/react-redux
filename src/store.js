import { applyMiddleware, combineReducers, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import math from './redusers/mathReduser'
import user from './redusers/userReduser'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

const combine = combineReducers({
    math,
    user
});

export default createStore(
    combine,
    {},
    applyMiddleware(createLogger(), thunk, promise()));