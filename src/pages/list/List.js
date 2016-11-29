import React from 'react'

import Button from '../../components/Button/Button'

import ReactList from './ReactList/ReactList'
import ReduxList from './ReduxList/ReduxList'

const List = () => (
  <div className="ListPage">
    <h2>List Examples</h2>
    <h3>State in React</h3>
    <ReactList />
    <h3>State in Redux</h3>
    <ReduxList />
    <Button text="List Button" />
  </div>
)

export default List
