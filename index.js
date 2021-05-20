import React from 'react';
import { render } from 'react-dom';
import "carbon-addons-iot-react/css/carbon-addons-iot-react.css";
import { render } from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import history from './history';

import './style.scss';

import { App, HierarchyList, StatefulTable, WizardModal, Home, SimpleList } from './components';

render((
  <Router history={history}>
    <App />
    <Route exact path="/" component={Home} />
    <Route path="/hierarchylist" component={HierarchyList} />
    <Route path="/table" component={StatefulTable} />
    <Route path="/modal" component={WizardModal} />
    <Route path="/simplelist" component={SimpleList} />
  </Router>
), document.getElementById('root'));
