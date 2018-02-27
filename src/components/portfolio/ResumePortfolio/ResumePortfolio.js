/* eslint react/style-prop-object: 0 */
import PropTypes from 'prop-types';
import React from 'react';

import { FormattedCurrency, FormattedCoin } from '../../formatted';
import { Container, BTC, ETH, Resume, USD } from './ResumePortfolio.style';
import CryptoView from '../CryptoView';

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
