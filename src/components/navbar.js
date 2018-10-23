import React, { Component } from 'react';
import SideBar from './sideBar';
import '../styles/css/mainPage.css'


class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark">
          <span className="navbar-brand mb-0 h1">Navbar</span>
        </nav>
        <SideBar/>
      </React.Fragment>
    );
  }
}

export default Navbar;