import reducer from '../ReduxCounterReducer'
import * as actions from '../ReduxCounterActions'

const reducerState = {
  counter: 0,
}

describe('ReduxCounterReducer', () => {
  it(`${actions.INCREASE_COUNTER} should increment counter state`, () => {
    const newState = reducer(reducerState, { type: actions.INCREASE_COUNTER })
    expect(newState.counter).toEqual(reducerState.counter + 1)
  })

  it(`${actions.DECREMENT_COUNTER} should decrement counter state`, () => {
    const newState = reducer(reducerState, { type: actions.DECREMENT_COUNTER })
    expect(newState.counter).toEqual(reducerState.counter + -1)
  })
})
