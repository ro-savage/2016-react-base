import React from 'react'

// We can import SVGs and have them embed in the app, instead of making a http request
// This is handled by webpack
import logo from './logo.svg'

import styles from './Header.css'

const Header = props =>
  <div className={styles.appHeader}>
    <img src={logo} className={styles.appLogo} alt="logo" />
    <h2>Welcome to {props.title}</h2>
  </div>

Header.propTypes = {
  title: React.PropTypes.string,
}

export default Header
