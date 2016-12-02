import React from 'react'

import styles from './List.css'

const renderListItems = (items) => {
  return (
    items.map((item, i) => (
      <li key={i}>{item}</li>
    ))
  )
}


const List = (props) => {
  return (
    <ul className={styles.list}>
      {props.children ? props.children : renderListItems(props.items)}
    </ul>
  )
}

List.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.string),
  children: React.PropTypes.element,
}

export default List
