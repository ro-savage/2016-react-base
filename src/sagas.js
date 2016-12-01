import { takeEvery, delay } from 'redux-saga'
import { put, call } from 'redux-saga/effects'

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

export function* helloSaga() { // eslint-disable-line
  console.log('Hello Sagas!')
}

export default function* rootSaga() {
  yield [
    helloSaga(),
    watchIncrementAsync(),
  ]
}
