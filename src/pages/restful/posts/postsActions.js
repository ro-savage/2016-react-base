export const fetchPosts = () => ({
  type: 'FETCH_POSTS',
})

export const addPost = postData => ({
  type: 'POST_POST',
  payload: postData,
})
