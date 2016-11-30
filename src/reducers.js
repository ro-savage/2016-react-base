import { combineReducers } from 'redux'
import ReduxListReducer from './pages/list/ReduxList/ReduxListReducer'
import ReduxCounterReducer from './pages/list/ReduxCounter/ReduxCounterReducer'

const rootReducer = combineReducers({
  reduxList: ReduxListReducer,
  reduxCounter: ReduxCounterReducer,
})

export default rootReducer
