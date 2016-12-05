import * as actions from './usersActions'

const reducerState = {
  users: [],
}

const UsersReducer = (state = reducerState, action) => {
  switch (action.type) {
    case actions.ADD_USERS:
      return {
        ...state,
        users: [...state.users, ...action.payload],
      }
    default:
      return state
  }
}

export default UsersReducer
