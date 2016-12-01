export const fetchPosts = () => ({
  type: 'FETCH_POSTS',
})

export const fetchPost = postId => ({
  type: 'FETCH_POST',
  payload: postId,
})

export const addPost = postData => ({
  type: 'POST_POST',
  payload: postData,
})
