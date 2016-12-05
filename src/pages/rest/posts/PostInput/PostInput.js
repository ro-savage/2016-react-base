import React from 'react'

import Button from '../../../../components/Button/Button'

class PostInput extends React.Component {
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
    // Create fake post data, as we only enter the title
    const post = {
      title: this.state.inputValue,
      body: 'This is generic post body. It is created for every post.',
      userId: Math.floor(Math.random() * 10) + 1,
    }
    this.props.save(post)
    this.setState({
      inputValue: '',
    })
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.inputValue} onChange={this.inputHandleChange} />
        <Button text="Add Post" onClick={this.handleSave} />
      </div>
    )
  }
}

PostInput.propTypes = {
  save: React.PropTypes.func.isRequired,
}

export default PostInput
