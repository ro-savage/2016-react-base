import { put, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import { incrementAsync } from './sagas'

it('incrementAsync Saga test', () => {
  const saga = incrementAsync()

  expect(saga.next().value).toEqual(call(delay, 500))
  expect(saga.next().value).toEqual(put({ type: '@@counter/INCREASE_COUNTER' }))
  expect(saga.next()).toEqual({ done: true, value: undefined })
})
