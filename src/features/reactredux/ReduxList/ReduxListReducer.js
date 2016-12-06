import * as actions from './ReduxListActions'

const reducerState = {
  items: [
    'Item 1',
    'Item 2',
    'Item 3',
  ],
}

const ReduxListReducer = (state = reducerState, action) => {
  switch (action.type) {
    case actions.SAVE_ITEM:
      // Create new state by 'spreading' the stat object, then over write the items value
      // with a spread of the current items place that payload items
      return {
        ...state,
        items: [...state.items, action.payload],
      }
    default:
      return state
  }
}

export default ReduxListReducer
