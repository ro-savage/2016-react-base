const reducerState = {
  posts: [],
}

const PostsReducer = (state = reducerState, action) => {
  switch (action.type) {
    case 'ADD_POSTS':
      return {
        ...state,
        posts: [...state.posts, ...action.payload],
      }
    case 'ADD_POST':
      return {
        ...state,
        posts: [...state.posts, action.payload],
      }
    default:
      return state
  }
}

export default PostsReducer
