import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './App'
import Home from './home/Home'
import List from './list/List'


// Uses React-Router to create routes for SPA
// Each route should be passed a title
// Each should look to a component, each compontent should have it's own section of the app
// The main Route compontent contains the the app layout, imported as App
const routes = (
  <Route path="/" component={App} >
    <IndexRoute title="Home Page" component={Home} />
    <Route path="list" title="List Page" component={List} />
  </Route>
)

export default routes
