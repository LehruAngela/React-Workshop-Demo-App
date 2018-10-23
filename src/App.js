import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar'
import Home from './components/home'
import SideBar from './components/sideBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path='/' component={Navbar} />
            <Route exact path='/home' component={Home} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
