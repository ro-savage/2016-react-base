import { takeEvery, delay } from 'redux-saga'
import { put, call } from 'redux-saga/effects'

// Import all the Sagas
import * as userSagas from './features/users/usersSagas'
import * as postsSagas from './features/posts/postsSagas'

// Worker Saga: will perform the async increment task
export function* incrementAsync() {
  yield call(delay, 500) // Deliberate delay
  yield put({ type: '@@counter/INCREASE_COUNTER' }) // Usually this would use the export action
  // constant.
}

// Watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery('@@counter/INCREMENT_ASYNC', incrementAsync) // Usually this would use the
  // export action constant.
}

export default function* rootSaga() {
  yield [
    watchIncrementAsync(),
    postsSagas.watchFetchPost(),
    postsSagas.watchFetchPosts(),
    postsSagas.watchPostPost(),
    userSagas.watchFetchUsers(),
  ]
}
