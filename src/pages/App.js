import React from 'react'
import { Link, IndexLink } from 'react-router'

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
        <div style={{textAlign: 'center'}}>
          <IndexLink to="/">Index</IndexLink>&nbsp;|&nbsp;
          <Link to="home">Home</Link>&nbsp;|&nbsp;
          <Link to="list">List</Link>
        </div>
      </div>
      )
  }
}

export default App;
