import React from 'react'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

import routes from './routes'
import configureStore from '../configureStore'

const store = configureStore()

class App extends React.Component {
  render() {
    // Fixes error with hot-reloading reloading routes
    // By only passing new routes if no routes are founds
    // https://github.com/ReactTraining/react-router/issues/2704#issuecomment-261310093
    if (!this.routes) { this.routes = routes }

    // Provider passes the redux store to the React app
    // Router providers url routes and browser history (backbutton)
    return (
      <Provider store={store}>
        <Router routes={this.routes} history={browserHistory} />
      </Provider>
    )
  }
}

export default App
