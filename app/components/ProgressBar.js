/* eslint react/style-prop-object: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from 'material-ui/LinearProgress';
import styled from 'styled-components';

import theme from '../config/theme';

const Bar = styled(LinearProgress)`
  > div {
    border-radius: 4px;
  }
`;

const barStyle = {
  backgroundColor: theme.backgroundColorTable,
  width: '180px',
  height: '7px',
  borderRadius: '4px',
};

class ProgressBar extends React.Component {
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
      <Bar
        style={barStyle}
        mode="determinate"
        value={this.state.completed}
      />
    );
  }
}

ProgressBar.propTypes = {
  percent: PropTypes.number.isRequired,
};

export default ProgressBar;
