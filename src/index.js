import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import './index.css'
import App from './pages/App'

ReactDOM.render(
  <App />,
  document.getElementById('root'), // eslint-disable-line
)

if (module.hot) {
  console.log('module.hot')
  module.hot.accept('./pages/App', () => {
    console.log('accepted module.hot')
    // Have to overwrite the original app with the new hot loading version
    const HotApp = require('./pages/App').default // eslint-disable-line
    ReactDOM.render(
      <AppContainer>
        <HotApp />
      </AppContainer>,
      document.getElementById('root'), // eslint-disable-line
    )
  })
}
