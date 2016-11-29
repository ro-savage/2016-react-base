import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './App.js'
import Home from './home/Home.js'
import List from './list/List.js'

const routes = (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Route path="list" component={List} />
  </Route>
)

export default routes
