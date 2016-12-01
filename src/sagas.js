import { takeEvery, delay } from 'redux-saga'
import { put, call } from 'redux-saga/effects'

import { fetchPost, fetchPosts, postPost } from './api'

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
  console.log('incrementAsync!')
  yield call(delay, 500)
  yield put({ type: 'INCREMENT' })
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  console.log('watchIncrementAsync!')
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export function* sagaFetchPost(data) {
  console.log('running', sagaFetchPost)
  const post = yield call(fetchPost, data.payload)
  yield put({ type: 'ADD_POST', payload: post })
  console.log('sagaFetchPost - ', post)
}

export function* watchFetchPost() {
  yield takeEvery('FETCH_POST', sagaFetchPost)
}

export function* sagaFetchPosts() {
  const posts = yield call(fetchPosts)
  yield put({ type: 'ADD_POSTS', payload: posts })
  console.log('sagaFetchPosts - ', posts)
}

export function* watchFetchPosts() {
  yield takeEvery('FETCH_POSTS', sagaFetchPosts)
}

export function* sagaPostPost(data) {
  const item = yield call(postPost, data.payload)
  yield put({ type: 'ADD_POST', payload: item })
  console.log('sagaPostPost - ', item)
}

export function* watchPostPost() {
  yield takeEvery('POST_POST', sagaPostPost)
}

export function* helloSaga() { // eslint-disable-line
  // Do nothing. Yay!
}

export default function* rootSaga() {
  yield [
    helloSaga(),
    watchIncrementAsync(),
    watchFetchPost(),
    watchFetchPosts(),
    watchPostPost(),
  ]
}
