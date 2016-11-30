import React from 'react'

import logo from './logo.svg'
import './Header.css'

const Header = props => (
  <div className="app-header">
    <img src={logo} className="app-logo" alt="logo" />
    <h2>Welcome to {props.title}</h2>
  </div>
)

Header.propTypes = {
  title: React.PropTypes.string,
}

export default Header
