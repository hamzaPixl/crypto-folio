/* eslint react/style-prop-object: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from 'material-ui/LinearProgress';
import styled from 'styled-components';

import theme from '../../config/theme';

const Bar = styled(LinearProgress)`
  > div {
    border-radius: 4px;
  }
`;

const barStyle = {
  backgroundColor: theme.light.backgroundColor,
  width: '100px',
  height: '7px',
  borderRadius: '4px',
};

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: 0,
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => this.progress(5), 500);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  progress(completed) {
    if (completed > this.props.percent) {
      this.setState({ completed: this.props.percent });
    } else {
      this.setState({ completed });
      const diff = Math.random() * 10;
      this.timer = setTimeout(() => this.progress(completed + diff), 200);
    }
  }

  render() {
    return (
      <Bar
        color={theme.light.dotColor}
        style={barStyle}
        mode="determinate"
        value={this.state.completed}
      />
    );
  }
}

ProgressBar.propTypes = {
  percent: PropTypes.number,
};

ProgressBar.defaultProps = {
  percent: 0,
};

export default ProgressBar;
