/* eslint react/style-prop-object: 0 */
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import theme from '../../utils/theme';

const Container = styled.div`
`;

const Name = styled.div``;

const Symbol = styled.div``;

const Icon = styled.div``;

const PriceBTC = styled.div``;

const PriceUSD = styled.div``;

const Percent = styled.div``;

function CryptoView(props) {
  const change24 = props.coin.percent_change_24h / 100;
  const percentageClass = props.coin.percent_change_24h < 0 ? 'negative' : 'positive';
  return (
    <Container>
      <Symbol>{props.coin.symbol}</Symbol>
      <Name>{props.coin.name}</Name>
      <Icon>{props.coin.icon}</Icon>
      <PriceBTC>{props.coin.price_btc}</PriceBTC>
      <PriceUSD>{props.coin.price_usd}</PriceUSD>
      <Percent>{change24}</Percent>
    </Container>
  );
}

CryptoView.propTypes = {
  coin: PropTypes.object,
  theme: PropTypes.string,
};

CryptoView.defaultProps = {
  theme: 'light',
  coin: {
    name: 'TRON',
    symbol: 'TRX',
    icon: 'T',
    price_btc: '0.0823515',
    price_usd: '949.314',
    percent_change_24h: '-2',
  },
};

export default CryptoView;
