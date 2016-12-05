import React from 'react'

import styles from './List.css'

// Children are react components
// If we recieved children we just render them
// or else we create the children outselves using renderListItems
const List = (props) => {
  return (
    <ul className={styles.list}>
      {props.children ? props.children : renderListItems(props.items)}
    </ul>
  )
}

// We create a sub component that simple renders a list of items when passed an array
// This allows us to take either an array
const renderListItems = (items) => {
  return (
    items.map((item, i) => (
      <li key={i}>{item}</li>
    ))
  )
}


List.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.string),
  children: React.PropTypes.element,
}

export default List
