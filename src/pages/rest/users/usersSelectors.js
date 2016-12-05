import { createSelector } from 'reselect'

export const getUsersState = state => state.users

export const getUser = (state, id) => {
  if (state.users && state.users.users) {
    return state.users.users.find(p => p.id.toString() === id.toString())
  }

  return false
}

export const getUsers = createSelector(
  getUsersState,
  users => users.users,
)
