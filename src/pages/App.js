import React from 'react'

import './App.css'
import Header from './layout/header/Header'
import Menu from './layout/menu/Menu'

// Example of class
class App extends React.Component { //eslint-disable-line
  render() {
    return (
      <div className="App">
        <Header title={this.props.routes[1].title} />
        <div className="Content">
          {this.props.children}
        </div>
        <Menu />
      </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.element,
  routes: React.PropTypes.arrayOf(
    React.PropTypes.object,
  ),
}

export default App
