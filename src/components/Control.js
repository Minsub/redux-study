import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onPlus: PropTypes.func,
  onSubtract: PropTypes.func,
  onRandomizerColor: PropTypes.func
}

const defaultProps = {
  onPlus: createWarning('onPlus'),
  onSubtract: createWarning('onSubtract'),
  onRandomizerColor: createWarning('onRandomizerColor')
}

function createWarning(funcName) {
	return () => console.warn(funcName + ' is not defined');
}

class Controll extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onPlus}>+</button>
        <button onClick={this.props.onSubtract}>-</button>
        <button onClick={this.props.onRandomizerColor}>Randomize Color</button>
      </div>
    );
  }
}

export default Controll;
Controll.propTypes = propTypes;
Controll.defaultProps = defaultProps;
