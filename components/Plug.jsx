import React, { Component } from 'react';
import {
    Tooltip,
    Link
  } from 'carbon-addons-iot-react';

const factsURL = "https://uselessfacts.jsph.pl/random.json?language=en";

class Plug extends Component {

  /*constructor() {
    this.plug = React.createRef();
  }*/

  state = {
    showTooltip: false,
    fact: null,
    loading: true,
    // dragging: false,
    // position: {},
  }

  componentDidMount() {
    // const plugPos = this.plug.current.getBoundingClientRect();
    //this.plug.current.addEventListener('mousedown', this.onMouseDown);
    //this.plug.current.addEventListener('mouseup', this.onMouseUp)
    //this.plug.current.addEventListener('mousemove', this.onMouseMove)
    // this.setState({
    //  position: {x: plugPos.x, y: plugPos.y},
    //  dragging: false,
    // });
  }

  componentDidUpdate() {
    
  }

  /*onMouseDown = (e) => {
    console.log('DOWN')
    if (this.state.dragging) return;
    if (e.button !== 0) return;
    this.setState({
      dragging: true,
    })
    e.stopPropagation()
    e.preventDefault()
  }

  onMouseUp = (e) => {
    console.log('UP');
    this.setState({dragging: false});
    e.stopPropagation();
    e.preventDefault();
    console.log('onmouseup', this.state.dragging);
  }

  onMouseMove = (e) => {
    if (!this.state.dragging) return;
    console.log(this.state.dragging);
    console.log('')
    this.setState(prevState => ({
      position: {
        x: e.pageX - prevState.position.x,
        y: e.pageY - prevState.position.y
      }
    }))
    e.stopPropagation();
    e.preventDefault();
  }*/

  showToolTip = () => {
    if (!this.state.showTooltip) {
      this.loadFact();
    } else {
      this.setState({
        showTooltip: false
      });
    }    
  }

  loadFact = () => {
    this.setState({
      loading: true
    });
    fetch(factsURL)
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({
          loading: false,
          fact: json.text,
          showTooltip: true,
        });
      });
  }

  render() {
    return(
      <>        
        {/*<div
          className={`plug ${this.state.dragging ? 'plug-drag' : ''}`}          
          style={{
            left: `${this.state.position.x}px`,
            top: `${this.state.position.y}px`,
          }}
          className="plug"
          onClick={this.showToolTip}
          ref={this.plug}
        >*/}
        <div
          className="plug"
          onClick={this.showToolTip}
        >
          {!this.state.showTooltip ? <>👋</> : <>🤖</>}
          <Tooltip
            open={this.state.showTooltip}
            direction='left'
            showIcon={false}
            className='plugTooltip'
          >
            <p className='factTitle'>Fact:</p>
            <p>{this.state.fact}</p>
            <p className='loadAnotherFact' onClick={this.loadFact}><Link>Load another fact</Link></p>
          </Tooltip>
        </div>
      </> 
    );
  }
}

export default Plug;