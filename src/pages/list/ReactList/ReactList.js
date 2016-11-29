import React from 'react'

import List from '../../../components/List/List'
import Button from '../../../components/Button/Button'

class ReactList extends React.Component {
  constructor() {
    super()
    this.state = {
      items: ['Item 1', 'Item 2', 'Item 3'],
      inputValue: '',
    }
    this.addItem = this.addItem.bind(this)
    this.inputHandleChange = this.inputHandleChange.bind(this)
  }

  addItem() {
    this.setState({
      items: [...this.state.items, this.state.inputValue],
      inputValue: '',
    })
  }

  inputHandleChange(event) {
    this.setState({
      inputValue: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <List items={this.state.items} />
        <input type="text" value={this.state.inputValue} onChange={this.inputHandleChange} />
        <Button text="Add Items" onClick={this.addItem} />
      </div>
    )
  }
}

export default ReactList
