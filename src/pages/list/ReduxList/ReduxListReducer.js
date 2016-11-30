
const reducerState = {
  items: [
    'Item 1',
    'Item 2',
    'Item 3',
  ],
}

const ReduxListReducer = (state = reducerState, action) => {
  switch (action.type) {
    case 'SAVE':
      return {
        ...state,
        items: [...state.items, action.payload],
      }
    default:
      return state
  }
}

export default ReduxListReducer
