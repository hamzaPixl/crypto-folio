/* eslint react/style-prop-object: 0 */
import React from 'react';
import PropTypes from 'prop-types';

import theme from '../../../utils/theme';
import { Circle } from './ProgressCircle.style';

class ProgressCircle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: 0,
      percent: props.percent,
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => this.progress(5), 500);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  progress(completed) {
    if (completed > this.state.percent) {
      this.setState({ completed: this.state.percent });
    } else {
      this.setState({ completed });
      const diff = Math.random() * 10;
      this.timer = setTimeout(() => this.progress(completed + diff), 200);
    }
  }

  render() {
    return (
      <Circle
        size={180}
        color={theme.basic.dotColor}
        thickness={5}
        mode="determinate"
        value={this.state.completed}
      />
    );
  }
}

ProgressCircle.propTypes = {
  percent: PropTypes.number,
};

ProgressCircle.defaultProps = {
  percent: 0,
};

export default ProgressCircle;
