export const INCREASE_COUNTER = '@@counter/INCREASE_COUNTER'
export const DECREMENT_COUNTER = '@@counter/DECREMENT_COUNTER'
export const INCREMENT_ASYNC = '@@counter/INCREMENT_ASYNC'

export const increaseCounter = () => ({
  type: INCREASE_COUNTER,
})

export const decreaseCounter = () => ({
  type: DECREMENT_COUNTER,
})

export const increaseCounterAsync = () => ({
  type: INCREMENT_ASYNC,
})
