import React from 'react'

import styles from './List.css'
import ReactList from './ReactList/ReactList'
import ReduxListContainer from './ReduxList/ReduxListContainer'
import ReduxCounterContainer from './ReduxCounter/ReduxCounterContainer'

const List = () => (
  <div>
    <h2>List Examples</h2>
    <div className={styles.examples}>
      <div className={styles.example}>
        <h3>State in React</h3>
        <h4>List</h4>
        <ReactList />
      </div>
      <div className={styles.example}>
        <h3>State in Redux</h3>
        <h4>List</h4>
        <ReduxListContainer />
      </div>
      <div className={styles.example}>
        <h3>State in Redux</h3>
        <h4>Counter</h4>
        <ReduxCounterContainer />
      </div>
    </div>
  </div>
)

export default List
