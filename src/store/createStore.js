import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {composeWithDevTools} from "redux-devtools-extension"
import RootReducer from './rootReducer'
import RootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(RootSaga)

export default store