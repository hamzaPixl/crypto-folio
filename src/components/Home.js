import React, { Component } from 'react';
import styled from 'styled-components';
import Carousel from 'nuka-carousel';
import { connect } from 'react-redux';
import Sync from 'material-ui/svg-icons/notification/sync';

import theme from '../utils/theme';
import wallet from '../config/wallet/';
import ThemeSwitcher from './ThemeSwitcher';
import Trend from './Trend';

import searchInformation from '../infrastructure/';
import { ResumePortfolio, TableMarket, TablePortfolio, CryptoView } from './portfolio';

import store from '../utils/store';

const Title = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 1%;
  font-family: ${props => theme[props.theme].fontFamily}, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: ${props => theme[props.theme].primaryColor};
  font-size: ${props => theme[props.theme].titleSize}px;
  line-height: ${props => theme[props.theme].lineHeight}rem;
  letter-spacing: ${props => theme[props.theme].letterSpacing}rem;
  text-align: center;
  > div {
    color: ${props => theme[props.theme].dotColor};
  }
`;

const Container = styled.div`
  background-color: ${props => theme[props.theme].bodyColor};
  padding-top: 2%;
  text-align: center;
`;

const ContentContainer = styled.div`
  div.slider-decorator-2,.slider-decorator-0,.slider-decorator-1{
    display: none;
  }
  display: flex;
  justify-content: space-around;
`;

const Refresh = styled.a`
  cursor: pointer;
  fill: ${props => theme[props.theme].dotColor},
  padding-left: 5px;
`;

const FooterContainer = styled.div`
  width: 5%;
  padding-bottom: 5px;
  display: flex;
  justify-content: space-around;
  margin: 0 47%;
`;

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
          <CryptoView theme={this.state.theme} coin={{}} />
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
