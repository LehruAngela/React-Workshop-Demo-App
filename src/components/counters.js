import React, { Component } from 'react';
import MainBody from './mainBody'

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 2 },
      { id: 4, value: 3 },
    ]
  }
  render() {
    return (
      <div>
        {this.state.counters.map(counter =>
          <MainBody key={counter.id} value={counter.value}>
            <h4>Item #{counter.id}</h4>
          </MainBody>)}
      </div>
    );
  }
}

export default Counters;