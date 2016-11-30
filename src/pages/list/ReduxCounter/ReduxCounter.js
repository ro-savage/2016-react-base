import React from 'react'

const counter = (props) => {
  return (
    <div>
      <span>Counter: {props.counter}</span>
      <br />
      <button onClick={props.increase}>Up!</button>
      <button onClick={props.decrease}>Down!</button>
    </div>
  )
}

counter.propTypes = {
  counter: React.PropTypes.string,
  increase: React.PropTypes.func,
  decrease: React.PropTypes.func,
}

export default counter
