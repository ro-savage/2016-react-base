import React from 'react'
import { Router, browserHistory } from 'react-router'

import routes from './routes'

class App extends React.Component {
  render() {
    // Fixes error with hot-reloading reloading routes
    // By only passing new routes if no routes are founds
    // https://github.com/ReactTraining/react-router/issues/2704#issuecomment-261310093
    if (!this.routes) { this.routes = routes }
    return (
      <Router routes={this.routes} history={browserHistory} />
    )
  }
}

export default App
