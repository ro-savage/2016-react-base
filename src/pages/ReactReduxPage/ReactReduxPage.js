import React from 'react'

import styles from './ReactReduxPage.css'
import ReactList from '../../features/reactredux/ReactList/ReactList'
import ReduxListContainer from '../../features/reactredux/ReduxList/ReduxListContainer'
import ReduxCounterContainer from '../../features/reactredux/ReduxCounter/ReduxCounterContainer'

const List = () => (
  <div>
    <h2>State Examples</h2>
    <div className={styles.intro}>
      <p>State can be stored locally in a component or globally in redux. Each has a trade off.</p>
      <p>The general rule is: If only that component (or subcomponents) uses the state,
        keep it locally (faster).</p>
      <p>If it will be used across multiple components or need to persist
        across pages put it in redux (presistant).</p>
      <a href="http://redux.js.org/docs/faq/OrganizingState.html#organizing-state-only-redux-state">Read more</a>
    </div>
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
