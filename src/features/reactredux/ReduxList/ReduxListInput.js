import React from 'react'

import Button from '../../../components/Button/Button'

/*
  This component keeps its state in React initially, in the form of inputValue
  Once the user is finished typing and presses the 'Add Items' button we send the input
  off to redux through the save prop, which is a dispatcher.

  We do this rather than update redux on every key press, because it is much faster and we do not
  see a use case for the app to do anything with the data 'as typed'.
 */

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
