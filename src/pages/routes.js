import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Layout from './layout/layout/Layout'
import HomePage from './home/HomePage'
import ReactReduxPage from './reactredux/ReactReduxPage'
import RestPage from './rest/RestPage'
import PostPage from './rest/post/PostPage'

// Uses React-Router to create routes for SPA
// Each route should be passed a title
// Each should look to a component, each compontent should have it's own section of the app
// The main Route compontent contains the the app layout, imported as Layout
const routes = (
  <Route path="/" component={Layout} >
    <IndexRoute title="Home Page" component={HomePage} />
    <Route path="react-redux" title="React Redux Page" component={ReactReduxPage} />
    <Route path="rest" title="REST Page" component={RestPage} />
    <Route path="rest/post/:id" title="Post Page" component={PostPage} />
  </Route>
)

export default routes
