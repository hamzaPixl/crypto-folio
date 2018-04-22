import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import { ThemeProvider } from 'styled-components';

import ThemeSwitcher from '../ThemeSwitcher/';
import News from '../news/';
import wallet from '../../config/wallet/';
import Trend from '../Trend';

import { searchInformation, searchNews } from '../../infrastructure/';
import { ResumePortfolio, TableMarket, TablePortfolio } from '../portfolio';
import { Container, ContentContainer, FooterContainer, Refresh, Sync, Title, theme } from './Home.style';

const { light, dark } = theme;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coins: wallet,
      totalUSD: 0,
      totalBTC: 0,
      totalETH: 0,
      theme: light,
      news: '',
    };
    this.changeTheme = this.changeTheme.bind(this);
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

  changeTheme() {
    if (this.state.theme.name === 'light') {
      this.setState({ theme: dark });
    } else {
      this.setState({ theme: light });
    }
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <Container>
          <Title> CRYPTO FOLIO <div>.</div> </Title>
          <Trend />
          <ContentContainer>
            <Carousel dragging swiping >
              <TableMarket coins={this.state.coins} />
              <TablePortfolio coins={this.state.coins} />
              <ResumePortfolio
                totalUSD={this.state.totalUSD}
                totalBTC={this.state.totalBTC}
                totalETH={this.state.totalETH}
              />
            </Carousel>
          </ContentContainer>
          <FooterContainer>
            <ThemeSwitcher onChangeTheme={this.changeTheme} />
            <Refresh onClick={() => this.fetchInformations()} >
              <Sync color={theme.basic.dotColor} />
            </Refresh>
          </FooterContainer>
          <News news={this.state.news} />
        </Container>
      </ThemeProvider>
    );
  }
}

export default Home;
