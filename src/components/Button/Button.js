import React from 'react'

const Button = props => <button onClick={props.onClick}>{props.text}</button>

Button.propTypes = {
  text: React.PropTypes.string,
  onClick: React.PropTypes.func,
}

export default Button
