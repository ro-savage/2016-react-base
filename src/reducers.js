import { combineReducers } from 'redux'
import ReduxListReducer from './pages/reactredux/ReduxList/ReduxListReducer'
import ReduxCounterReducer from './pages/reactredux/ReduxCounter/ReduxCounterReducer'
import postsReducer from './pages/rest/posts/postsReducer'
import usersReducer from './pages/rest/users/usersReducer'

const rootReducer = combineReducers({
  reduxList: ReduxListReducer,
  reduxCounter: ReduxCounterReducer,
  posts: postsReducer,
  users: usersReducer,
})

export default rootReducer
