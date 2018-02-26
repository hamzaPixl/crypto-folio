/* eslint react/style-prop-object: 0 */
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { FormattedCurrency, FormattedCoin } from '../formatted';
import theme from '../../utils/theme';

import CryptoView from './CryptoView';

const Container = styled.div`
  margin-top: 2%;
  display: inline-flex;
  color: ${props => theme[props.theme].primaryColor};
  font-family: ${props => theme[props.theme].fontFamily}, sans-serif;
`;

const Resume = styled.div`
  text-align: center;
  font-size: 40px;
`;

const BTC = styled.div`
  padding-top: 5px;
  font-size: 20px;
`;

const ETH = styled.div`
  padding-top: 5px;
  font-size: 20px;
`;

const USD = styled.div`
  font-size: 100px;
  color: ${theme.basic.dotColor};
`;

function ResumePortfolio(props) {
  return (
    <Container theme={props.theme}>
      <Resume>
        <USD><FormattedCurrency value={props.totalUSD} /></USD>
        <BTC><FormattedCoin symbol="฿" value={props.totalBTC} /></BTC>
        <ETH><FormattedCoin symbol="Ξ" value={props.totalETH} /></ETH>
        <CryptoView theme={props.theme} />
      </Resume>
    </Container>
  );
}

ResumePortfolio.propTypes = {
  totalUSD: PropTypes.number,
  totalBTC: PropTypes.number,
  totalETH: PropTypes.number,
  theme: PropTypes.string,
};

ResumePortfolio.defaultProps = {
  totalUSD: 0,
  totalBTC: 0,
  totalETH: 0,
  theme: 'light',
};

export default ResumePortfolio;
