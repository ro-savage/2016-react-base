const reducerState = {
  posts: ['Post one', 'Awesome post', 'Sweet post'],
}

const PostsReducer = (state = reducerState, action) => {
  switch (action.type) {
    case 'ADD_POSTS':
      return {
        ...state,
      }
    case 'SOMETHING':
      return {
        ...state,
      }
    default:
      return state
  }
}

export default PostsReducer
