import { takeEvery } from 'redux-saga'
import { put, call } from 'redux-saga/effects'

import * as API from './usersAPI'
import * as actions from './usersActions'

export function* sagaFetchUsers() {
  const users = yield call(API.fetchUsers)
  yield put({ type: actions.ADD_USERS, payload: users })
}

export function* watchFetchUsers() {
  yield takeEvery(actions.ADD_FETCH, sagaFetchUsers)
}
