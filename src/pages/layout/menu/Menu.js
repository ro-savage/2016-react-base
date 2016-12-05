import React from 'react'
import { Link, IndexLink } from 'react-router'

import styles from './Menu.css'

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
