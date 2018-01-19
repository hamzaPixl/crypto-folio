/* eslint react/style-prop-object: 0 */
import PropTypes from 'prop-types';
import React from 'react';
import { FormattedNumber } from 'react-intl';
import styled from 'styled-components';

import theme from '../config/theme';

const Container = styled.div`
  &.negative {
    color: ${theme.dark.changeNegative};
  }
  &.positive {
    color: ${theme.dark.changePositive};
  }
`;

function FormattedCurrency(props) {
  return (
    <Container className={props.class}>
      <FormattedNumber
        currency="USD"
        currencyDisplay="symbol"
        style="currency"
        maximumFractionDigits={2}
        value={props.value}
      />
    </Container>
  );
}

FormattedCurrency.propTypes = {
  value: PropTypes.number.isRequired,
  class: PropTypes.string.isRequired,
};

export default FormattedCurrency;
