import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Layout from './layout/layout/Layout'
import HomePage from './HomePage/HomePage'
import ReactReduxPage from './ReactReduxPage/ReactReduxPage'
import RestPage from './RestPage/RestPage'
import PostPage from './Post/PostPage'

// Uses React-Router to create routes for SPA
// Each route should be passed a title
// Each should look to a component, each compontent should have it's own section of the app
// The main Route compontent contains the the app layout, imported as Layout
const routes = (
  <Route path="/" component={Layout} >
    <IndexRoute title="Home Page" component={HomePage} />
    <Route path="react-redux" title="React Redux Page" component={ReactReduxPage} />
    <Route path="rest" title="REST Page" component={RestPage} />
    <Route path="post/:id" title="Post Page" component={PostPage} />
  </Route>
)

export default routes
