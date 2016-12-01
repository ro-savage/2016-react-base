import { createSelector } from 'reselect'

export const getPostsState = state => state.posts

export const getPosts = createSelector(
  getPostsState,
  posts => posts.posts,
)

export const getPostTitles = createSelector(
  getPosts,
  posts => posts.map(p => p.title),
)
