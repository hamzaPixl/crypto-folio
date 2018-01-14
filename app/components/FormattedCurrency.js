/* eslint react/style-prop-object: 0 */
import PropTypes from 'prop-types';
import React from 'react';
import { FormattedNumber } from 'react-intl';

function FormattedCurrency(props) {
  return (
    <FormattedNumber
      currency="USD"
      currencyDisplay="symbol"
      style="currency"
      maximumFractionDigits={2}
      value={props.value}
    />
  );
}

FormattedCurrency.propTypes = {
  value: PropTypes.number.isRequired,
};

export default FormattedCurrency;
