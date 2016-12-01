import { takeEvery, delay } from 'redux-saga'
import { put, call } from 'redux-saga/effects'

import { fetchPosts } from './api'

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
  console.log('incrementAsync!')
  yield call(delay, 500)
  // yield delay(500)
  yield put({ type: 'INCREMENT' })
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  console.log('watchIncrementAsync!')
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export function* sagaFetchPosts() {
  const items = yield call(fetchPosts)
  yield put({ type: 'ADD_POSTS', payload: items })
  // const items = yield fetchImages();
  console.log('sagaFetchPosts - ', items)
}

export function* watchFetchPosts() {
  console.log('watchFetchPosts!')
  yield takeEvery('FETCH_POSTS', sagaFetchPosts)
}

export function* helloSaga() { // eslint-disable-line
  console.log('Hello Sagas!')
}

export default function* rootSaga() {
  yield [
    helloSaga(),
    watchIncrementAsync(),
    watchFetchPosts(),
  ]
}
