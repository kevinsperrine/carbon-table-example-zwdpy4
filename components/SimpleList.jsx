import React, {Component} from 'react';
import {
  SimpleList,
  Button,
  Tabs,
  Tab
} from 'carbon-addons-iot-react';

import { generateSimpleList, getRandom} from '../utils/utils';

const generateData = () => ({
  'smallSimple': generateSimpleList(getRandom(15, 25)),
  'largeSimple': generateSimpleList(getRandom(60,80)),
});

class CustomSimpleList extends Component {

  state = {
    update: false,
    data: {}, 
    selected: 'smallSimple',
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
          <SimpleList
          hasSearch
          hasPagination
          items={this.state.data[this.state.selected]}
          pageSize={this.state.selected === 'smallSimple' ? `sm` : 'xl'}
          onSelect={() => this.setState(state => ({update: !!state.update}))}
          title="simpleList"
        />
        )}        
        <Button onClick={() => this.setState(state => ({update: !!state.update, data: generateData(),}))}>
          Update
        </Button>
      </div>
    );
  }
}

export default CustomSimpleList;