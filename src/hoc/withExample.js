import React, { Component } from 'react';

export default (WrappedComponent) => {
  class withExample extends Component {
    render() {
      return (
        <WrappedComponent {...this.props} {...this.state} />
      );
    }
  }
  return withExample
}