import React from 'react'
import { Link, IndexLink } from 'react-router'

import './Menu.css'

const Menu = () => (
  <div className="menu">
    <IndexLink to="/">Home</IndexLink>
    &nbsp;|&nbsp;
    <Link to="list">List</Link>
  </div>
)

export default Menu
