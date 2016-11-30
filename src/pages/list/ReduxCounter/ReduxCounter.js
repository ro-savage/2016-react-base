import React from 'react'

import Button from '../../../components/Button/Button'

const counter = (props) => {
  return (
    <div>
      <span>Counter: {props.counter}</span>
      <br />
      <Button onClick={props.increase}>Up!</Button>
      <Button onClick={props.decrease}>Down!</Button>
    </div>
  )
}

counter.propTypes = {
  counter: React.PropTypes.string,
  increase: React.PropTypes.func,
  decrease: React.PropTypes.func,
}

export default counter
