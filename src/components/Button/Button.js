import React from 'react'

import styles from './Button.css'

const Button = props =>
  <button className={styles.button} onClick={props.onClick}>
    {props.text || props.children}
  </button>

Button.propTypes = {
  text: React.PropTypes.string,
  children: React.PropTypes.string,
  onClick: React.PropTypes.func,
}

export default Button
