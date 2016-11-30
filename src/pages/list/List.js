import React from 'react'

import './List.css'
import ReactList from './ReactList/ReactList'
import ReduxListContainer from './ReduxList/ReduxListContainer'
import ReduxCounterContainer from './ReduxCounter/ReduxCounterContainer'

const List = () => (
  <div className="ListPage">
    <h2>List Examples</h2>
    <div className="examples">
      <div className="example">
        <h3>State in React</h3>
        <h4>List</h4>
        <ReactList />
      </div>
      <div className="example">
        <h3>State in Redux</h3>
        <h4>List</h4>
        <ReduxListContainer />
      </div>
      <div className="example">
        <h3>State in Redux</h3>
        <h4>Counter</h4>
        <ReduxCounterContainer />
      </div>
    </div>
  </div>
)

export default List
