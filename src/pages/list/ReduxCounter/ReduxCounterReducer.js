const reducerState = {
  counter: 0,
}

const ReduxCounterReducer = (state = reducerState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1,
      }
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1,
      }
    default:
      return state
  }
}

export default ReduxCounterReducer
