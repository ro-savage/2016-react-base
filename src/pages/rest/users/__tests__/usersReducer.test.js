import reducer from '../usersReducer'
import * as actions from '../usersActions'

const reducerState = {
  users: [],
}

describe('ReduxCounterReducer', () => {
  it(`${actions.ADD_USERS} should add new users`, () => {
    const users = [{ id: 1 }, { id: 2 }]
    const newState = reducer(reducerState, { type: actions.ADD_USERS, payload: users })
    expect(newState.users).toEqual(users)
  })
})
