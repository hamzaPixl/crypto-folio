/* eslint react/style-prop-object: 0 */
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { FormattedCurrency } from '../formatted';
import { ProgressCircle } from '../progress';
import theme from '../../utils/theme';

const Container = styled.div`
  display: flex;
  margin-top: 7%;
  align-items: center;
  color: ${props => theme[props.theme].primaryColor};
  flex-direction: column;
  font-family: ${props => theme[props.theme].fontFamily}, sans-serif;
`;

const PriceUSD = styled.div`
  padding-top: 30px;
  font-size: 40px;
`;

function ResumePortfolio(props) {
  return (
    <Container theme={props.theme}>
      <ProgressCircle percent={100} />
      <PriceUSD>
        <FormattedCurrency value={props.totalPrice} />
      </PriceUSD>
    </Container>
  );
}

ResumePortfolio.propTypes = {
  totalPrice: PropTypes.number,
  theme: PropTypes.string,
};

ResumePortfolio.defaultProps = {
  totalPrice: 0,
  theme: 'light',
};

export default ResumePortfolio;
