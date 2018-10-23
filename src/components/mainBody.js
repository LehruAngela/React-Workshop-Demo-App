import React, { Component } from 'react';
import '../styles/css/mainPage.css'

class MainBody extends Component {
  state = {
    value: this.props.value,
  }

  formatCount() {
    const { value } = this.state
    return value === 0 ? 'Sold out' : value
  }

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 })
  }

  handleReduction = () => {
    this.setState({ value: this.state.value - 1 })
  }

  render() {
    return (
      <React.Fragment>
        <div class="card">
          <div class="card-header">
            {this.props.children}
          </div>
          <div class="card-body">
            <span className='badge badge-info m-2 size'>{this.formatCount()}</span>
            <button className='btn btn-secondary m-2' onClick={this.handleIncrement}>Restock</button>
            <button className='btn btn-primary' onClick={this.handleReduction} disabled={this.state.value === 0}>Sold</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MainBody;