export const ADD_FETCH = '@@users/FETCH_USERS'
export const ADD_USERS = '@@users/ADD_USERS'

export const fetchUsers = () => ({
  type: ADD_FETCH,
})

export const addUsers = users => ({
  type: ADD_USERS,
  payload: users,
})
