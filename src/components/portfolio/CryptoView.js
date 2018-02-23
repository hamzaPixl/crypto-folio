/* eslint react/style-prop-object: 0 */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

import { FormattedPercentage, FormattedCurrency, FormattedCoin } from '../formatted';
import theme from '../../utils/theme';

const URL_API = 'https://api.coinmarketcap.com/v1/ticker/';
const URL_ICON = 'https://coincodex.com/en/resources/images/admin/coins/';

const CardContainer = styled.div`
  border-radius: 4px;
  background-color: ${props => theme[props.theme].backgroundColor};
  box-shadow: 0 2px 4px 0 rgba(91,114,137,0.2);
  padding: 25px;
`;

const Container = styled.div`
  font-size: 20px;
  font-family: ${props => theme[props.theme].fontFamily}, sans-serif;
`;

const Name = styled.div`
  padding-bottom: 2%;
`;

const CoinInformation = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2%;
`;

const Symbol = styled.div``;

const PriceBTC = styled.div``;

const MarketInformation = styled.div`
  font-size: 11px;
  display: flex;
  flex-direction: column;
`;

const Capitalisation = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1%;
  > div {
    padding-left: 5px;
  }
`;

const Volume = styled.div`
  display: flex;
  justify-content: space-between;
  > div {
    padding-left: 5px;
  }
`;

const PriceUSD = styled.div``;

const Percent = styled.div`
  font-size: 19px;
  > div {
    padding: 0;
  }
`;

const SymbolContainer = styled.div`
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-bottom: 2%;
`;

const PriceContainer = styled.div`
  text-align: right;
  font-size: 16px;
`;

const SearchContainer = styled.div`
  padding-top: 10%;
  padding-bottom: 10%;
`;

const Search = styled.input`
  text-align:center;
  font-size: 20px;
  background-color: ${props => (props.theme === 'dark' ? theme[props.theme].backgroundColor : null)};
  color: ${props => theme[props.theme].dotColor};
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
        percent_change_24h: '2',
        market_cap_usd: '6633114589.0',
        '24h_volume_usd': '90687700.0',
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
      <Container theme={this.props.theme}>
        <SearchContainer>
          <Search
            theme={this.props.theme}
            placeholder="Search"
            type="text"
          />
        </SearchContainer>

        <CardContainer theme={this.props.theme}>

          <CoinInformation>

            <SymbolContainer>
              <Name>{this.state.coin.name}</Name>
              <Symbol>{this.state.coin.symbol}</Symbol>
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
                  class={percentageClass}
                  value={this.state.coin.price_usd}
                />
              </PriceUSD>
              <Percent>
                <FormattedPercentage
                  value={change24}
                  class={percentageClass}
                />
              </Percent>
            </PriceContainer>

          </CoinInformation>
          <MarketInformation>
            <Capitalisation>
              MARKET CAPITALIZATION
              <FormattedCurrency
                value={this.state.coin.market_cap_usd}
              />
            </Capitalisation>
            <Volume>
              24 HOUR TRADING VOLUME
              <FormattedCurrency
                value={this.state.coin['24h_volume_usd']}
              />
            </Volume>
          </MarketInformation>

        </CardContainer>
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
