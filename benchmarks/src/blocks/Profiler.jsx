import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class CustomProfiler extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };
  state = {
    actualTime: 0,
  };
  componentWillMount() {
    this.beginTs = performance.now();
  }
  componentDidMount() {
    this.setState({ actualTime: performance.now() - this.beginTs });
  }
  render() {
    const { actualTime } = this.state;
    return (
      <Fragment>
        {!!actualTime && <div>Rendered in {actualTime}ms</div>}
        {this.props.children}
      </Fragment>
    );
  }
}

export default CustomProfiler;
