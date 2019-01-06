import React, { Component } from 'react';

class Analysis extends Component {
  state = {
  };

  componentDidMount() {
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId);
  }

  render() {
    return (
      <p>
        111
      </p>
    );
  }
}

export default Analysis;
