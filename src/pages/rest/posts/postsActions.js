export const FETCH_POSTS = '@@posts/FETCH_POSTS'
export const FETCH_POST = '@@posts/FETCH_POST'
export const ADD_POSTS = '@@posts/ADD_POSTS'
export const ADD_POST = '@@posts/ADD_POST'
export const POST_POST = '@@posts/POST_POST'

export const fetchPosts = () => ({
  type: FETCH_POSTS,
})

export const fetchPost = postId => ({
  type: FETCH_POST,
  payload: postId,
})

export const addPost = postData => ({
  type: POST_POST,
  payload: postData,
})
