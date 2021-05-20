import React, {Component} from 'react';
import {
  HierarchyList,
  Button,
  Tabs,
  Tab
} from 'carbon-addons-iot-react';

import { generateSimpleList, generateHierarchy, getRandom} from '../utils/utils';

const generateData = () => ({
        'smallHierarchy': generateHierarchy(3, 3),
        'smallSimple': generateSimpleList(getRandom(15, 25)),
        'largeHierarchy': generateHierarchy(5, 5),
        'largeSimple': generateSimpleList(getRandom(60,80)),
      });

class CustomHierarchyList extends Component {

  state = {
    update: false,
    data: {}, 
    selected: 'smallHierarchy',
  }

  componentDidMount() {
    this.setState({
      data: generateData(),
    })
  }

  selectionChange = (id) => {
    this.setState(prevState => ({
      selected: Object.keys(prevState.data)[id]
    }))
  }

  render() {
    // hierarchy list
    console.log('rerender');
    return(
      <div className='hierarchyContainer'>
        <Tabs onSelectionChange={this.selectionChange}>
          {Object.keys(this.state.data).map(key => (
            <Tab label={key} />
          ))}
        </Tabs>
        {Object.keys(this.state.data).length && (
          <HierarchyList
          hasSearch
          hasPagination
          items={this.state.data[this.state.selected]}
          pageSize="xl"
          onSelect={() => this.setState(state => ({update: !!state.update}))}
          // key={this.state.data[this.state.selected].length}
        />
        )}        
        <Button onClick={() => this.setState(state => ({update: !!state.update, data: generateData(),}))}>
          Update
        </Button>
      </div>
    );
  }
}

export default CustomHierarchyList;