import React from 'react'

import styles from './List.css'


const List = (props) => {
  const listItem = props.items ? props.items : props.children
  return (
    <ul className={styles.list}>
      {props.items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  )
}

List.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.string),
}

export default List
