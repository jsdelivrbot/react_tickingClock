import React, { Component } from 'react';

class CurrentTime extends Component {
  constructor(props) {
    super(props);
    this.state = { time: this.getCurrentDate() };

    setInterval(() => {
      this.setState({ time: this.getCurrentDate() })
    }, 1000);
  }
  getCurrentDate() {
    return new Date().toLocaleTimeString();
  }
  render() {
    return (
      <div>
        { this.state.time }
      </div>
    );
  }
}

export default CurrentTime;
