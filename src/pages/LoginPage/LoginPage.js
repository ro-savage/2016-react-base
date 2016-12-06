import React from 'react'
import { Link } from 'react-router'

import styles from './LoginPage.css'
import Button from '../../components/Button/Button'

const LoginPage = () =>
  <div className={styles.loginBox}>
    <h2>Login</h2>
    <Link to="/">
      <Button onClick={login}>Login</Button>
    </Link>
  </div>

// For the test login. We simply save the state of if someone is logged in or not
// to local storage. Then when someone tries to visit a page, we can check if they are logged in
// or not. To see data, regardless of localStorage they will need a token.
// This is simply to do a redirect, it is not for security
const login = () => window.localStorage.setItem('authorized', true)

export default LoginPage
