import React, { Component } from 'react';
import styled from 'styled-components';
import Carousel from 'nuka-carousel';

import theme from '../config/theme';
import wallet from '../config/wallet/';
import Trend from './Trend';

import searchInformation from '../infrastructure/';
import { ResumePortfolio, TableMarket, TablePortfolio } from './portfolio';

const Title = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 5%;
  font-family: ${theme.light.fontFamily}, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: ${theme.light.primaryColor};
  font-size: ${theme.light.titleSize}px;
  line-height: ${theme.light.lineHeight}rem;
  letter-spacing: ${theme.light.letterSpacing}rem;
  text-align: center;
  > div {
    color: ${theme.light.dotColor};
  }
`;

const Container = styled.div`
  background-color: ${theme.light.bodyColor};
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

class Home extends Component {
  constructor() {
    super();
    this.state = {
      coins: wallet,
      totalPrice: 0,
    };
  }

  componentWillMount() {
    this.fetchInformations();
  }

  componentDidMount() {
    setInterval(
      () => this.fetchInformations(),
      (1000 * 1),
    );
  }

  fetchInformations() {
    return searchInformation(this.state.coins)
      .then((coins) => {
        this.setState({ coins, totalPrice: coins.reduce((a, b) => (a + b.totalPrice), 0) });
      });
  }

  render() {
    return (
      <Container>
        <Title>Cf<div>.</div></Title>
        <Trend />
        <ContentContainer>
          <Carousel
            dragging
            swiping
          >
            <TableMarket coins={this.state.coins} />
            <TablePortfolio coins={this.state.coins} />
            <ResumePortfolio totalPrice={this.state.totalPrice} />
          </Carousel>
        </ContentContainer>
      </Container>
    );
  }
}

export default Home;
