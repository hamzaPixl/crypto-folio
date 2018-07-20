import React, { Component } from 'react';

import user from '../config/user.json';
import { News, NavigationBar } from '../components';

import ResumePortfolio from './ResumePortfolio';
import TableMarket from './TableMarket';
import TablePortfolio from './TablePortfolio';
import CryptoView from './CryptoView';

import { searchInformation, searchNews } from '../infrastructure';
import { TitleDot, TitleContainer, IntroContainer, Container, ContentContainer, FooterContainer, Refresh, Sync, Title, theme } from './Home.style';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user,
      coins: user.coins,
      totalUSD: 0,
      totalBTC: 0,
      totalETH: 0,
      news: '',
    };
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
        searchNews().then(news => this.setState({ news }));
      });
  }

  render() {
    return (
      <Container>
        <NavigationBar />
        <ResumePortfolio
          totalUSD={this.state.totalUSD}
          totalBTC={this.state.totalBTC}
          totalETH={this.state.totalETH}
        />
        <News news={this.state.news} />
      </Container>
    );
  }
}

export default Home;
