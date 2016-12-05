import { combineReducers } from 'redux'
import ReduxListReducer from './features/reactredux/ReduxList/ReduxListReducer'
import ReduxCounterReducer from './features/reactredux/ReduxCounter/ReduxCounterReducer'
import postsReducer from './features/posts/postsReducer'
import usersReducer from './features/users/usersReducer'

const rootReducer = combineReducers({
  reduxList: ReduxListReducer,
  reduxCounter: ReduxCounterReducer,
  posts: postsReducer,
  users: usersReducer,
})

export default rootReducer
