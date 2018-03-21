import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import { connect } from 'react-redux';

import store from '../../utils/store';
import ThemeSwitcher from '../ThemeSwitcher/';
import wallet from '../../config/wallet/';
import Trend from '../Trend';

import { searchInformation } from '../../infrastructure/';
import { ResumePortfolio, TableMarket, TablePortfolio } from '../portfolio';
import { Container, ContentContainer, FooterContainer, Refresh, Sync, Title, theme } from './Home.style';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coins: wallet,
      totalUSD: 0,
      totalBTC: 0,
      totalETH: 0,
      theme: 'light',
    };
    this.subscribeTheme = this.subscribeTheme.bind(this);
    this.subscribeTheme();
  }

  componentWillMount() {
    this.fetchInformations();
  }

  componentDidMount() {
    setInterval(
      () => this.fetchInformations(),
      (1000 * 60 * 5),
    );
  }

  subscribeTheme() {
    store.subscribe(() => {
      const lastTheme = store.getState().themeReducer.pop().theme;
      this.setState({ theme: lastTheme });
    });
  }

  fetchInformations() {
    return searchInformation(this.state.coins)
      .then((coins) => {
        const btc = coins.reduce((a, b) => (a + b.totalBTC), 0);
        const eth = btc / coins.find(c => c.symbol === 'ETH').price_btc;
        const usd = coins.reduce((a, b) => (a + b.totalPrice), 0);
        this.setState({
          coins,
          totalUSD: usd,
          totalBTC: btc,
          totalETH: eth,
        });
      });
  }

  render() {
    return (
      <Container theme={this.state.theme}>
        <Title theme={this.state.theme}>
          CRYPTO FOLIO
          <div>.</div>
        </Title>
        <Trend />
        <ContentContainer theme={this.state.theme}>
          <Carousel
            dragging
            swiping
          >
            <TableMarket
              theme={this.state.theme}
              coins={this.state.coins}
            />
            <TablePortfolio
              theme={this.state.theme}
              coins={this.state.coins}
            />
            <ResumePortfolio
              theme={this.state.theme}
              totalUSD={this.state.totalUSD}
              totalBTC={this.state.totalBTC}
              totalETH={this.state.totalETH}
            />
          </Carousel>
        </ContentContainer>
        <FooterContainer>
          <ThemeSwitcher />
          <Refresh
            theme={this.state.theme}
            onClick={() => this.fetchInformations()}
          >
            <Sync
              color={theme.basic.dotColor}
            />
          </Refresh>
        </FooterContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  theme: state.theme,
});

export default connect(mapStateToProps)(Home);
