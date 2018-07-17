import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import ThemeSwitcher from '../themeSwitcher/';
import News from '../news/';
import wallet from '../../config/wallet/';
import Trend from '../Trend';

import { searchInformation, searchNews } from '../../infrastructure/';
import { ResumePortfolio } from '../portfolio';
import { TitleDot, TitleContainer, IntroContainer, Container, ContentContainer, FooterContainer, Refresh, Sync, Title, theme } from './Home.style';

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
      introShow: true,
    };
    this.changeTheme = this.changeTheme.bind(this);
  }

  componentWillMount() {
    this.fetchInformations();
    setTimeout(() => this.setState({ introShow: false }), 4 * 1000);
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

  renderIntro() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <IntroContainer>
          <TitleContainer>
            <Title>CRYPTO FOLIO</Title>
            <TitleDot>.</TitleDot>
          </TitleContainer>
          <Trend />
        </IntroContainer>
      </ThemeProvider>
    );
  }

  renderFolio() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <Container>
          <ContentContainer>
            <ResumePortfolio
              totalUSD={this.state.totalUSD}
              totalBTC={this.state.totalBTC}
              totalETH={this.state.totalETH}
            />
          </ContentContainer>
          <FooterContainer>
            <ThemeSwitcher onChangeTheme={this.changeTheme} />
            <Refresh onClick={() => this.fetchInformations()} >
              <Sync color={theme.basic.mainColor} />
            </Refresh>
          </FooterContainer>
          <News news={this.state.news} />
        </Container>
      </ThemeProvider>
    );
  }

  render() {
    return this.state.introShow ? this.renderIntro() : this.renderFolio();
  }
}

export default Home;
