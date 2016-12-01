import { put, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import { incrementAsync } from './sagas'

it('incrementAsync Saga test', () => {
  const gen = incrementAsync()

  expect(gen.next().value).toEqual(call(delay, 500))
  expect(gen.next().value).toEqual(put({ type: 'INCREMENT' }))
  expect(gen.next()).toEqual({ done: true, value: undefined })
})
