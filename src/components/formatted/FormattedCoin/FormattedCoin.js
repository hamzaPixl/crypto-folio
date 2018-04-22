/* eslint react/style-prop-object: 0 */
import PropTypes from 'prop-types';
import React from 'react';
import { FormattedNumber } from 'react-intl';

function FormattedCoin(props) {
  return (
    <div>
      {props.symbol}&nbsp;&nbsp;
      <FormattedNumber
        maximumFractionDigits={6}
        value={props.value}
      />
    </div>
  );
}

FormattedCoin.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  symbol: PropTypes.string,
};

FormattedCoin.defaultProps = {
  value: 0,
  symbol: '',
};

export default FormattedCoin;
