import { combineReducers } from 'redux'
import ReduxListReducer from './pages/list/ReduxList/ReduxListReducer'
import ReduxCounterReducer from './pages/list/ReduxCounter/ReduxCounterReducer'
import postsReducer from './pages/restful/posts/postsReducer'
import usersReducer from './pages/restful/users/usersReducer'

const rootReducer = combineReducers({
  reduxList: ReduxListReducer,
  reduxCounter: ReduxCounterReducer,
  posts: postsReducer,
  users: usersReducer,
})

export default rootReducer
