import React from 'react'

import styles from './HomePage.css'

const Home = () =>
  <div className={styles.appIntro}>
    <h2>Intro</h2>
    <p>
      This base gives examples of how to use create an modify a React/Redux SPA.<br />
      It uses simple real world examples that can be used to learn from or can be forked and used
      as a base to build on top of.
    </p>
    <p>
      <b>Features include:</b> React, Redux, Redux-Saga, PostCSS/cssnext, CSS Modules,
      Jest & Enzyme testing, bable for ES6 features, webpack bundling and dev,
      npm commands for build/tests.
    </p>
    <h2>State Management</h2>
    <p>The List page shows examples of show to do state management in redux and react.</p>
    <p>Including stores, actions, selectors, and basic side effects and internal state.</p>
    <h2>Restful API calls</h2>
    <p>The Restful page shows examples of show to do API calls in react/redux and how to
      save the data</p>
  </div>

export default Home
