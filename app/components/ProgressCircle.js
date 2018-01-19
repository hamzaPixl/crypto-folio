/* eslint react/style-prop-object: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import styled from 'styled-components';

import theme from '../config/theme';

const Circle = styled(CircularProgress)`
  > div {
    border-radius: 4px;
  }
`;

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
        color={theme.light.dotColor}
        thickness={5}
        mode="determinate"
        value={this.state.completed}
      />
    );
  }
}

ProgressCircle.propTypes = {
  percent: PropTypes.number.isRequired,
};

export default ProgressCircle;
