/* eslint react/style-prop-object: 0 */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
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

const SymbolContainer = styled.div``;

const SearchContainer = styled.div``;

const Search = styled.input``;

const PriceContainer = styled.div``;

class CryptoView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coin: {
        name: 'TRON',
        symbol: 'TRX',
        icon: 'T',
        price_btc: '0.0823515',
        price_usd: '949.314',
        percent_change_24h: '-2',
      },
    };
  }

  fetchInformations(event, data) {
    const url = `https://api.coinmarketcap.com/v1/ticker/${data}`;
    fetch(url, { method: 'GET' })
      .then((res) => {

      });
  }

  render() {
    const change24 = this.state.coin.percent_change_24h / 100;
    const percentageClass = this.state.coin.percent_change_24h < 0 ? 'negative' : 'positive';
    return (
      <Container>
        <SearchContainer>
          <Search />
        </SearchContainer>

        <Icon>{this.state.coin.icon}</Icon>

        <SymbolContainer>
          <Symbol>{this.state.coin.symbol}</Symbol>
          <Name>{this.state.coin.name}</Name>
        </SymbolContainer>

        <PriceContainer>
          <PriceBTC>{this.state.coin.price_btc}</PriceBTC>
          <PriceUSD>{this.state.coin.price_usd}</PriceUSD>
          <Percent>{change24}</Percent>
        </PriceContainer>
      </Container>
    );
  }
}

CryptoView.propTypes = {
  theme: PropTypes.string,
};

CryptoView.defaultProps = {
  theme: 'light',
};

export default CryptoView;
