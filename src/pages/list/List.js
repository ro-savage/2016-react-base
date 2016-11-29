import React from 'react'

import Button from '../../components/Button/Button'

class App extends React.Component {
  render() {
    return (
      <div className="List">
        <ul>
          <li>Test 1</li>
          <li>Test 2</li>
          <li>Test 3</li>
        </ul>
        <Button text="List Button" />
      </div>
    )
  }
}

export default App
