import React from 'react'

import logo from './logo.svg'
import styles from './Header.css'

const Header = props => (
  <div className={styles.appHeader}>
    <img src={logo} className={styles.appLogo} alt="logo" />
    <h2>Welcome to {props.title}</h2>
  </div>
)

Header.propTypes = {
  title: React.PropTypes.string,
}

export default Header
