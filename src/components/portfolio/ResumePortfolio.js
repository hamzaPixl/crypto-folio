/* eslint react/style-prop-object: 0 */
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { FormattedCurrency, FormattedCoin } from '../formatted';
import { ProgressCircle } from '../progress';
import theme from '../../utils/theme';

const Container = styled.div`
  margin-top: 7%;
  display: inline-flex;
  color: ${props => theme[props.theme].primaryColor};
  font-family: ${props => theme[props.theme].fontFamily}, sans-serif;
`;

const Resume = styled.div`
  padding-top: 5px;
  padding-left: 10%;
  text-align: left;
  font-size: 40px;
`;

const BTC = styled.div`
  padding-top: 5px;
  font-size: 15px;
`;

const ETH = styled.div`
  padding-top: 5px;
  font-size: 15px;
`;

const USD = styled.div`
  font-size: 100px;
  color: ${theme.basic.dotColor};
`;

function ResumePortfolio(props) {
  return (
    <Container theme={props.theme}>
      <ProgressCircle percent={100} />
      <Resume>
        <USD><FormattedCurrency animate value={props.totalUSD} /></USD>
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
