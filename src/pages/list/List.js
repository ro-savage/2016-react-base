import React from 'react'

import ReactList from './ReactList/ReactList'
import ReduxListContainer from './ReduxList/ReduxListContainer'
import ReduxCounterContainer from './ReduxCounter/ReduxCounterContainer'

const List = () => (
  <div className="ListPage">
    <h2>List Examples</h2>
    <h3>State in React</h3>
    <ReactList />
    <h3>State in Redux</h3>
    <h4>List</h4>
    <ReduxListContainer />
    <h4>Counter</h4>
    <ReduxCounterContainer />
  </div>
)

export default List
