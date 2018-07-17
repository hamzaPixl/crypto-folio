/* eslint react/style-prop-object: 0 */
import React from 'react';
import PropTypes from 'prop-types';

import theme from '../../../utils/theme';
import { Bar } from './ProgressBar.style';

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
    const barStyle = {
      backgroundColor: this.props.theme.backgroundColor,
      width: '100px',
      height: '7px',
      borderRadius: '4px',
    };

    return (
      <Bar
        color={theme.basic.mainColor}
        style={barStyle}
        mode="determinate"
        value={this.state.completed}
      />
    );
  }
}

ProgressBar.propTypes = {
  percent: PropTypes.number,
  theme: PropTypes.string,
};

ProgressBar.defaultProps = {
  percent: 0,
  theme: 'light',
};

export default ProgressBar;
