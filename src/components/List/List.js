import React from 'react'

import styles from './List.css'


const List = (props) => {
  return (
    <ul className={styles.list}>
      {props.items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

List.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.string),
}

export default List
