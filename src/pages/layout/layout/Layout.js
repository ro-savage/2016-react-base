import React from 'react'

import styles from './Layout.css'
import Header from '../header/Header'
import Menu from '../menu/Menu'

// Example of class
class Layout extends React.Component { //eslint-disable-line
  render() {
    return (
      <div className={styles.app}>
        <Header title={this.props.routes[1].title} />
        <div className={styles.content}>
          {this.props.children}
        </div>
        <Menu />
      </div>
    )
  }
}

Layout.propTypes = {
  children: React.PropTypes.element,
  routes: React.PropTypes.arrayOf(
    React.PropTypes.object,
  ),
}

export default Layout
