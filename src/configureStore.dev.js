import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger' // eslint-disable-line
import immutableStateInvariant from 'redux-immutable-state-invariant' // eslint-disable-line

import rootReducer from './reducers'

const configureStore = () => {
  // Logs state changes in console
  const loggerMiddlware = createLogger({ collapsed: () => { return true } })

  const store = createStore(
    rootReducer,
    compose(
      // immutableStateInvariant - Gives warning if you mutate redux state
      applyMiddleware(immutableStateInvariant(), loggerMiddlware),
    ),
    // Enables redux dev tools
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default // eslint-disable-line
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore
