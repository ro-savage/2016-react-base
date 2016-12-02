import { createSelector } from 'reselect'

export const getPostsState = state => state.posts

export const getPost = (state, id) => {
  console.log('Selector getPost', state, id)
  if (state.posts && state.posts.posts) {
    console.log('finding post', state.posts.posts.find(p => p.id.toString() === id.toString()))
    state.posts.posts.find(p => console.log('is it equal?', p.id.toString() === id.toString(), p.id, id))
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
