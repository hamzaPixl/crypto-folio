import React, { Component } from 'react';
import styled from 'styled-components';
import theme from '../config/theme';

import TableMarket from './TableMarket';
import Trend from './Trend';
import wallet from '../config/wallet';
import searchInformation from '../infrastructure/searchInformation';

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

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

class Home extends Component {
  constructor() {
    super();
    this.state = {
      coins: wallet,
    };
  }

  componentDidMount() {
    setInterval(
      () => searchInformation(this.state.coins)
        .then(coins => this.setState({ coins })),
      (1000 * 2),
    );
  }

  render() {
    return (
      <Container>
        <Title>Cf<div>.</div></Title>
        <Trend />
        <ContentContainer>
          <TableMarket coins={this.state.coins} />
        </ContentContainer>
      </Container>
    );
  }
}

export default Home;
