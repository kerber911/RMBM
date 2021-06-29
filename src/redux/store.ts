import { applyMiddleware, combineReducers, createStore, Store } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'
import { GLOBAL_URL } from '../all-constants'

export interface IAppState {}

const client = axios.create({
  baseURL: GLOBAL_URL,
  responseType: 'json'
})

const clientConfig = {}

const rootReducer = combineReducers({})

const reducerInitializedStore = createStore(rootReducer)

// add <IAppState,any> to Store
export default function configureStore(): Store {
  const store = createStore(
    rootReducer,
    undefined,
    composeWithDevTools(applyMiddleware(thunk, axiosMiddleware(client, clientConfig)))
  )
  return store
}
