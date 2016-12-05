import React from 'react'

import Button from '../../../components/Button/Button'

class ReduxListInput extends React.Component {
  constructor() {
    super()
    this.state = {
      inputValue: '',
    }
    this.inputHandleChange = this.inputHandleChange.bind(this)
    this.handleSave = this.handleSave.bind(this)
  }

  inputHandleChange(event) {
    this.setState({
      inputValue: event.target.value,
    })
  }

  handleSave() {
    this.props.save(this.state.inputValue)
    this.setState({
      inputValue: '',
    })
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.inputValue} onChange={this.inputHandleChange} />
        <Button text="Add Items" onClick={this.handleSave} />
      </div>
    )
  }
}

ReduxListInput.propTypes = {
  save: React.PropTypes.func,
}

export default ReduxListInput
