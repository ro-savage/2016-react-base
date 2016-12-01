import { combineReducers } from 'redux'
import ReduxListReducer from './pages/list/ReduxList/ReduxListReducer'
import ReduxCounterReducer from './pages/list/ReduxCounter/ReduxCounterReducer'
import postsReducer from './pages/restful/posts/postsReducer'

const rootReducer = combineReducers({
  reduxList: ReduxListReducer,
  reduxCounter: ReduxCounterReducer,
  posts: postsReducer,
})

export default rootReducer
