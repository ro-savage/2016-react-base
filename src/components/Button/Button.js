import React from 'react'

const Button = (props) => <button>{props.text}</button>

Button.propTypes = {
  text: React.PropTypes.string,
}

export default Button
