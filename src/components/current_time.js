import React, { Component } from 'react';

class CurrentTime extends Component {
  constructor(props) {
    super(props);
    // Initialize state to current date upon creation
    this.state = { time: this.getCurrentDate() };
    // Set state to update to current date every second
    setInterval(() => {
      this.setState({ time: this.getCurrentDate() })
    }, 1000);
  }
  // method for getting curring date
  getCurrentDate() {
    return new Date().toLocaleTimeString();
  }
  // render based on state
  render() {
    return (
      <div>
        { this.state.time }
      </div>
    );
  }
}

export default CurrentTime;
