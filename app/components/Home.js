import React, { Component } from 'react';
import styled from 'styled-components';
import theme from '../config/theme';

import TableMarket from './TableMarket';
import Trend from './Trend';
import searchInformation from '../infrastructure/searchInformation';
import wallet from '../config/wallet';

const Title = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 5%;
  font-family: ${theme.fontFamily}, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: ${theme.primaryColor};
  font-size: ${theme.titleSize}px;
  line-height: ${theme.lineHeight}rem;
  letter-spacing: ${theme.letterSpacing}rem;
  text-align: center;
  > div {
    color: ${theme.dotColor};
  }
`;

const Container = styled.div`
  padding-top: 2%;
  text-align: center;
`;

class Home extends Component {
  constructor() {
    super();
    this.state = {
      coins: wallet,
    };
    setInterval(
      () => searchInformation(this.state.coins)
        .then(coins => this.setState({ coins })),
      (1000 * 1),
    );
  }

  render() {
    return (
      <Container>
        <Title>Cf<div>.</div></Title>
        <Trend />
        <TableMarket coins={this.state.coins} />
      </Container>
    );
  }
}

export default Home;
