import React from 'react'

import logo from './logo.svg'
import './Header.css'

const Header = props => (
  <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h2>Welcome to {props.title}</h2>
  </div>
)

Header.propTypes = {
  title: React.PropTypes.string,
}

export default Header
