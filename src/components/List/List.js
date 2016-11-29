import React from 'react'

import './List.css'

const List = (props) => {
  return (
    <ul className="ListComponent">
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
