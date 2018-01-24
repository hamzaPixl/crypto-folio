/* eslint react/style-prop-object: 0 */
import PropTypes from 'prop-types';
import React from 'react';
import { FormattedNumber } from 'react-intl';
import styled from 'styled-components';

import theme from '../../utils/theme';

const Container = styled.div`
  &.negative {
    color: ${theme.basic.changeNegative};
  }
  &.positive {
    color: ${theme.basic.changePositive};
  }
`;

class FormattedCurrency extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: 0,
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => this.progress(5), 100);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  progress(completed) {
    if (completed > this.props.value) {
      this.setState({ completed: this.props.value });
    } else {
      this.setState({ completed });
      const diff = Math.random() * 50;
      this.timer = setTimeout(() => this.progress(completed + diff), 100);
    }
  }
  render() {
    return (
      <Container className={this.props.class}>
        <FormattedNumber
          currency="USD"
          currencyDisplay="symbol"
          style="currency"
          maximumFractionDigits={2}
          value={this.props.animate ? this.state.completed : this.props.value}
        />
      </Container>
    );
  }
}

FormattedCurrency.propTypes = {
  value: PropTypes.number,
  class: PropTypes.string,
  animate: PropTypes.bool,
};

FormattedCurrency.defaultProps = {
  value: 0,
  class: '',
  animate: false,
};

export default FormattedCurrency;
