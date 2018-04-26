/* eslint react/style-prop-object: 0 */
import PropTypes from 'prop-types';
import React from 'react';
import { FormattedNumber } from 'react-intl';
import { Container } from './FormattedCurrency.style';

function FormattedCurrency(props) {
  return (
    <Container className={props.class}>
      {props.symbol}&nbsp;&nbsp;
      <FormattedNumber
        currency="USD"
        maximumFractionDigits={2}
        value={props.value}
      />
    </Container>
  );
}

FormattedCurrency.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  class: PropTypes.string,
  symbol: PropTypes.string,
};

FormattedCurrency.defaultProps = {
  value: 0,
  class: '',
  symbol: '$',
};

export default FormattedCurrency;
