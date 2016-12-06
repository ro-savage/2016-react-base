import React from 'react'

import styles from './ReactList.css'
import List from '../../../components/List/List'
import Button from '../../../components/Button/Button'

/*
  **** STATE IN REACT ****
  The ReactList Component is an example of keeping state within a component itself,
  as opposed to Redux.
  State should be kept in the component itself when it will only ever be local, some examples of
  this would be:
   -> A open/close accordion, the accordion is the only thing that needs to know if its open or not
   -> A form field, a form field only needs to knows it own value/sate until the value is saved.
   -> Dropdown being open or closed

   Updating React Component state is much faster than updating redux state.

   Read more: https://github.com/reactjs/redux/issues/1287
   Dan Abramov: 'The rule of thumb is: do whatever is less awkward.'
 */

class ReactList extends React.Component {
  constructor() {
    super() // required. If you need props then props then constructor(props) super(props)

    this.state = { // Set he initial state of the component. This could also be set by props
      items: ['Item 1', 'Item 2', 'Item 3'],
      inputValue: '',
    }
    // We need to bind 'this' to the methods because we are using the this.setState method
    this.addItem = this.addItem.bind(this)
    this.inputHandleChange = this.inputHandleChange.bind(this)
  }

  addItem() {
    // When we 'Add Item' then we update the state, including the original state with the spread
    // operator
    this.setState({
      items: [...this.state.items, this.state.inputValue],
      inputValue: '',
    })
  }

  // Re keep the form field value in the component state, so that react and the dom have exactly
  // the same state at all times
  inputHandleChange(event) {
    this.setState({
      inputValue: event.target.value,
    })
  }

  // To ensure react and the dom stay in sync, every time their is a change we update the
  // internal state, the internal state then updates the value of the field.
  render() {
    return (
      <div>
        <List items={this.state.items} />
        <input
          type="text" className={styles.input}
          value={this.state.inputValue} onChange={this.inputHandleChange}
        />
        <Button text="Add Item" onClick={this.addItem} />
      </div>
    )
  }
}

export default ReactList
