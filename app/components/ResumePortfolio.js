/* eslint react/style-prop-object: 0 */
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import FormattedCurrency from './FormattedCurrency';
import ProgressCircle from './ProgressCircle';
import theme from '../config/theme';

const Container = styled.div`
  display: flex;
  align-items: center;
  color: ${theme.dark.primaryColor};
  flex-direction: column;
  font-family: ${theme.dark.fontFamily}, sans-serif;
`;

const PriceUSD = styled.div`
  padding-top: 30px;
  font-size: 40px;
`;

function ResumePortfolio(props) {
  return (
    <Container>
      <ProgressCircle percent={100} />
      <PriceUSD>
        <FormattedCurrency value={props.totalPrice} />
      </PriceUSD>
    </Container>
  );
}

ResumePortfolio.propTypes = {
  totalPrice: PropTypes.number,
};

ResumePortfolio.defaultProps = {
  totalPrice: 0,
};

export default ResumePortfolio;
