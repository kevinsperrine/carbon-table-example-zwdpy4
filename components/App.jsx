import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
    Tabs,
    Tab,
  } from 'carbon-addons-iot-react';

import Plug from './Plug';

// adding the style below prevents toggling the checkboxes
class App extends Component {
  render() {
    const tabs = [
      '',
      'hierarchylist',
      'table',
      'modal',
      'simplelist',
    ];
    return (
      <>
        <Tabs
            onSelectionChange={(sel) => this.props.history.push(`/${tabs[sel]}`)}
          >
            <Tab label="Home"/>
            <Tab label="HierarchyList"/>
            <Tab label="Table" />
            <Tab label='WizardModal' />
            <Tab label='SimpleList' />
        </Tabs>        
        <Plug /> 
      </>
    )
  }
}

export default withRouter(App);