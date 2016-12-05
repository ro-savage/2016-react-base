import * as actions from './postsActions'

const reducerState = {
  posts: [],
}

const PostsReducer = (state = reducerState, action) => {
  switch (action.type) {
    case actions.ADD_POSTS:
      return {
        ...state,
        posts: [...state.posts, ...action.payload],
      }
    case actions.ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      }
    default:
      return state
  }
}

export default PostsReducer
