/* eslint react/style-prop-object: 0 */
import PropTypes from 'prop-types';
import React from 'react';
import { FormattedNumber } from 'react-intl';
import { ArrowDown, ArrowUp, Container } from './FormattedPercentage.style';

function FormattedPercent(props) {
  const arrow = props.class === 'negative' ? ArrowDown : ArrowUp;
  return (
    <Container className={props.class}>
      <FormattedNumber
        maximumFractionDigits={2}
        style="percent"
        value={Math.abs(props.value)}
      />
      <img src={arrow} alt="" />
    </Container>
  );
}

FormattedPercent.propTypes = {
  value: PropTypes.number,
  class: PropTypes.string,
};

FormattedPercent.defaultProps = {
  value: 0,
  class: '',
};

export default FormattedPercent;
