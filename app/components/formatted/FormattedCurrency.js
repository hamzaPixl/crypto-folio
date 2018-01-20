/* eslint react/style-prop-object: 0 */
import PropTypes from 'prop-types';
import React from 'react';
import { FormattedNumber } from 'react-intl';
import styled from 'styled-components';

import theme from '../../config/theme';

const Container = styled.div`
  &.negative {
    color: ${theme.light.changeNegative};
  }
  &.positive {
    color: ${theme.light.changePositive};
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
  value: PropTypes.number,
  class: PropTypes.string,
};

FormattedCurrency.defaultProps = {
  value: 0,
  class: '',
};

export default FormattedCurrency;
