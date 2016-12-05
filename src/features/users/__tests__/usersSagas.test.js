import { put, call } from 'redux-saga/effects'

import { sagaFetchUsers } from '../usersSagas'
import * as API from '../usersAPI'
import * as actions from '../usersActions'

it('sagaFetchUsers Saga test', () => {
  const saga = sagaFetchUsers()

  expect(saga.next().value).toEqual(call(API.fetchUsers))
  expect(saga.next().value).toEqual(put({ type: actions.ADD_USERS, payload: undefined }))
  expect(saga.next()).toEqual({ done: true, value: undefined })
})
