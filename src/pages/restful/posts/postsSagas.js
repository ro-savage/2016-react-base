import { takeEvery } from 'redux-saga'
import { put, call } from 'redux-saga/effects'

import * as API from './postsAPI'
import * as actions from './postsActions'

export function* sagaFetchPost(data) {
  const post = yield call(API.fetchPost, data.payload)
  yield put({ type: actions.ADD_POST, payload: post })
}

export function* watchFetchPost() {
  yield takeEvery(actions.FETCH_POST, sagaFetchPost)
}

export function* sagaFetchPosts() {
  const posts = yield call(API.fetchPosts)
  yield put({ type: actions.ADD_POSTS, payload: posts })
}

export function* watchFetchPosts() {
  yield takeEvery(actions.FETCH_POSTS, sagaFetchPosts)
}

export function* sagaPostPost(data) {
  const item = yield call(API.postPost, data.payload)
  yield put({ type: actions.ADD_POST, payload: item })
}

export function* watchPostPost() {
  yield takeEvery(actions.POST_POST, sagaPostPost)
}
