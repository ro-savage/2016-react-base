import { createSelector } from 'reselect'

export const getPostsState = state => state.posts

export const getPost = (state, props) => state.posts ? state.posts.find(p => p[props.id]) : false

export const getPosts = createSelector(
  getPostsState,
  posts => posts.posts,
)

export const getPostTitles = createSelector(
  getPosts,
  posts => posts.map(p => p.title),
)
