/* eslint react/style-prop-object: 0 */
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { FormattedCurrency, FormattedCoin } from '../formatted';
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

const Resume = styled.div`
  padding-top: 30px;
  font-size: 40px;
`;

const BTC = styled.div`
  padding-top: 5px;
  font-size: 25px;
`;

const ETH = styled.div`
  padding-top: 5px;
  font-size: 25px;
`;

const USD = styled.div`
`;

function ResumePortfolio(props) {
  return (
    <Container theme={props.theme}>
      <ProgressCircle percent={100} />
      <Resume>
        <USD><FormattedCurrency value={props.totalUSD} /></USD>
        <BTC><FormattedCoin symbol="BTC" value={props.totalBTC} /></BTC>
        <ETH><FormattedCoin symbol="ETH" value={props.totalETH} /></ETH>
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
