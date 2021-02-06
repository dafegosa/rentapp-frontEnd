import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/userRedducer'
import myElementsReducer from '../reducers/myElementsReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  combineReducers({
    user: userReducer,
    myElements: myElementsReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
)

export default store
