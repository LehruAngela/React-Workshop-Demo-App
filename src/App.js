import React, { Component } from 'react';
import Navbar from './components/navbar'
import Item from './components/item'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Item />
      </div>
    );
  }
}

export default App;
