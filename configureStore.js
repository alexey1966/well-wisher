import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import configurationReducers from './modules/configuration-module'
import infoReducers from './modules/info-module'
import wishReducers from './modules/wish-module'

const reducers = combineReducers({
  configuration : configurationReducers,
  info : infoReducers,
  wish : wishReducers
});

const persistConfig = {
  key: 'root',
  storage,
  timeout : 0
}

const persistedReducer = persistReducer(persistConfig, reducers)

export default (preloadedState) => {
  return createStore(
    persistedReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware
    )
  )
}