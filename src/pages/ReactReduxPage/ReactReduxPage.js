import React from 'react'

import styles from './ReactReduxPage.css'
import ReactList from '../../features/reactredux/ReactList/ReactList'
import ReduxListContainer from '../../features/reactredux/ReduxList/ReduxListContainer'
import ReduxCounterContainer from '../../features/reactredux/ReduxCounter/ReduxCounterContainer'

const List = () => (
  <div>
    <h2>List Examples</h2>
    <div className={styles.examples}>
      <div className={styles.example}>
        <h3>State in React</h3>
        <pre>ReactList.js</pre>
        <h4>List</h4>
        <ReactList />
      </div>
      <div className={styles.example}>
        <h3>State in Redux</h3>
        <pre>ReduxList.js</pre>
        <h4>List</h4>
        <ReduxListContainer />
      </div>
      <div className={styles.example}>
        <h3>State in Redux</h3>
        <pre>ReduxCounter.js</pre>
        <h4>Counter</h4>
        <ReduxCounterContainer />
      </div>
    </div>
  </div>
)

export default List
