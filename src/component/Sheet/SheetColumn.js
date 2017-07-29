import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SheetColumn extends Component {
  static displayName = 'SheetColumn'
  static propTypes = {
    field: PropTypes.string.isRequired,
    name: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.element.isRequired
    ])
  }
  render() {
    return <div/>;
  }
}

export default SheetColumn;