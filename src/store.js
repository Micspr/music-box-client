import {createStore, combineReducers, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import artists from './reducers/artists'

const reducers = combineReducers({artists})

export default createStore(reducers, applyMiddleware(logger, thunk))