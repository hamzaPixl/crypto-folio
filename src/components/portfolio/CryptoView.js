/* eslint react/style-prop-object: 0 */
/* eslint prefer-destructuring: 0 */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

import { FormattedPercentage, FormattedCurrency, FormattedCoin } from '../formatted';
import theme from '../../utils/theme';

const URL_API = 'https://api.coinmarketcap.com/v1/ticker/';
const URL_ICON = 'https://coincodex.com/en/resources/images/admin/coins/';

const Container = styled.div``;

const Name = styled.div``;

const Symbol = styled.div`
  padding-right: 5px;
`;

const Icon = styled.div``;

const PriceBTC = styled.div``;

const PriceUSD = styled.div``;

const Percent = styled.div``;

const SymbolContainer = styled.div`
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const PriceContainer = styled.div``;

const SearchContainer = styled.div`
  padding-top: 10%;
  padding-bottom: 10%;
`;

const Search = styled.input`
  text-align:center;
  color: ${props => theme[props.theme].dotColor};
  font-size: 25px;
  border: 2px solid ${props => theme[props.theme].dotColor};
  border-radius: 3px;
`;

class CryptoView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coin: {
        name: 'tron',
        symbol: 'trx',
        icon: 'https://coincodex.com/en/resources/images/admin/coins/tron.png',
        price_btc: '0.0823515',
        price_usd: '949.314',
        percent_change_24h: '-2',
      },
    };
  }

  handleSearch(event, data) {
    const url = `${URL_API}${data}`;
    fetch(url, { method: 'GET' })
      .then(res => res.json())
      .then((res) => {
        const coinFound = Array.isArray(res);
        if (coinFound) {
          this.state.coin = Object.assign({}, res[0], { icon: `${URL_ICON}${res[0].name}` });
        }
      });
  }

  render() {
    const change24 = this.state.coin.percent_change_24h / 100;
    const percentageClass = this.state.coin.percent_change_24h < 0 ? 'negative' : 'positive';
    return (
      <Container>
        <SearchContainer>
          <Search
            theme={this.props.theme}
            placeholder="Search"
            type="text"
          />
        </SearchContainer>

        <SymbolContainer>
          <Symbol>{this.state.coin.symbol}</Symbol>
          <Name>{this.state.coin.name}</Name>
        </SymbolContainer>

        <PriceContainer>
          <PriceBTC>
            <FormattedCoin
              symbol="฿"
              value={this.state.coin.price_btc}
            />
          </PriceBTC>
          <PriceUSD>
            <FormattedCurrency
              value={this.state.coin.price_usd}
              class={percentageClass}
            />
          </PriceUSD>
          <Percent>
            <FormattedPercentage
              value={change24}
              class={percentageClass}
            />
          </Percent>
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
