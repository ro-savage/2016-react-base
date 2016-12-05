import React from 'react'

import styles from './Button.css' // Import the style, as per css modules

// ES6 syntax, and a stateless component. Simplist component.
// className is generated after being imported by webpacl
const Button = props =>
  <button className={styles.button} onClick={props.onClick}>
    {props.text || props.children}
  </button>

// propTypes are always required.
Button.propTypes = {
  text: React.PropTypes.string,
  children: React.PropTypes.string,
  onClick: React.PropTypes.func,
}

export default Button
