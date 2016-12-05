import React from 'react'
import { Link, IndexLink } from 'react-router'

import styles from './Menu.css'

// We use the Link component from react-router
// to link to pages across the webapp without actually loading pages.
const Menu = () => (
  <div className={styles.menu}>
    <IndexLink to="/">Home</IndexLink>
    &nbsp;|&nbsp;
    <Link to="/react-redux">React Redux</Link>
    &nbsp;|&nbsp;
    <Link to="/rest">REST</Link>
  </div>
)

export default Menu
