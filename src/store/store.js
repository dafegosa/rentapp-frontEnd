import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/userRedducer'
import myElementsReducer from '../reducers/myElementsReducer'
import elementsReducer from '../reducers/elementsReducer'
import searchReducer from '../reducers/searchReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  combineReducers({
    user: userReducer,
    myElements: myElementsReducer,
    elements: elementsReducer,
    search: searchReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
)

export default store
