import React from 'react'

import styles from './Layout.css'
import Header from '../header/Header'
import Menu from '../menu/Menu'

// Example of React Class (Does not need to be)
// All pages are passed to layout, and then appear in the {this.props.children} section
class Layout extends React.Component { //eslint-disable-line
  render() {
    return (
      <div className={styles.app}>
        <Header title={this.props.routes[2].title} />
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
