import React, { Component } from 'react';
import ItemBody from './itemBody'

class Item extends Component {
  state = {
    items: [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 2 },
      { id: 4, value: 3 },
    ]
  }
  render() {
    return (
      <div>
        {this.state.items.map(item =>
          <ItemBody key={item.id} value={item.value}>
            <h4>Item #{item.id}</h4>
          </ItemBody>)}
      </div>
    );
  }
}

export default Item;