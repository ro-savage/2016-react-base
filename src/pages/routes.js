import React from 'react'
import { Route, Redirect } from 'react-router'

import Layout from './layout/layout/Layout'
import HomePage from './HomePage/HomePage'
import ReactReduxPage from './ReactReduxPage/ReactReduxPage'
import RestPage from './RestPage/RestPage'
import PostPage from './Post/PostPage'
import LoginPage from './LoginPage/LoginPage'
import NotFoundPage from './NotFoundPage/NotFoundPage'

// Uses React-Router to create routes for SPA
// Each route should be passed a title
// Each should look to a component, each compontent should have it's own section of the app
// The main Route compontent contains the the app layout, imported as Layout
// Before entering any of the protected pages, we check if the user is logged in.
const getRoutes = () => {
  return (
    <Route>
      <Route onEnter={requireLogin} component={Layout}>
        <Route path="/" title="Home Page" component={HomePage} />
        <Route path="react-redux" title="React Redux Page" component={ReactReduxPage} />
        <Route path="rest" title="REST Page" component={RestPage} />
        <Route path="post/:id" title="Post Page" component={PostPage} />
        <Route path="/404" title="Page not found" component={NotFoundPage} />
      </Route>
      <Route path="/login" title="Login" component={LoginPage} />
      <Redirect path="*" to="/404" />
    </Route>
  )
}
// This login check is simply to make it easier for the user to log in, but taking them
// to the log in page. It does not provide any security.
// All data security should use token auth, and be done on the API/Backend.
// DO NOT keep any private/secret data within the app. It will be accessible to anyone.
const requireLogin = (nextState, replace, cb) => {
  function checkAuth() {
    if (!window.localStorage.authorized) {
      // Not authenticated. Redirect to login page
      replace('/login')
    }
    cb()
  }
  checkAuth()
}

export default getRoutes
