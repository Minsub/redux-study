import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
  number: PropTypes.number
}

const defaultProps = {
	number: -1
}

class Value extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.number}</h2>
      </div>
    );
  }
}

export default Value;
Value.propTypes = propTypes;
Value.defaultProps = defaultProps;
