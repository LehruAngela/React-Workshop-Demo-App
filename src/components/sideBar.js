import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../styles/css/sidebar.css'
import Counters from './counters';
import Home from './home';

class SideBar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='sidenav'>
          <Link to='/home'>Home</Link>
        </div>
        <div class='main'>
          <Counters />
        </div>
      </React.Fragment>
    );
  }
}

export default SideBar;
