import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router'

import './index.css';
import routes from './pages/routes'

ReactDOM.render(
  <Router routes={routes} history={browserHistory} />,
  document.getElementById('root')
);
