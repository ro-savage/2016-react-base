import * as actions from './ReduxCounterActions'

const reducerState = {
  counter: 0,
}

const ReduxCounterReducer = (state = reducerState, action) => {
  switch (action.type) {
    case actions.INCREASE_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      }
    case actions.DECREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter - 1,
      }
    default:
      return state
  }
}

export default ReduxCounterReducer
