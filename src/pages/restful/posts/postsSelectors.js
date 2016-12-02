import { createSelector } from 'reselect'

export const getPostsState = state => state.posts

export const getPost = (state, id) => {
  if (state.posts && state.posts.posts) {
    return state.posts.posts.find(p => p.id.toString() === id.toString())
  }

  return false
}

export const getPosts = createSelector(
  getPostsState,
  posts => posts.posts,
)

export const getPostTitles = createSelector(
  getPosts,
  posts => posts.map(p => p.title),
)
