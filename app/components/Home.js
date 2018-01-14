import React from 'react';
import styled from 'styled-components';
import theme from '../config/theme';

import logo from '../assets/images/logo.svg';
import TableMarket from './TableMarket';
import Trend from './Trend';

const Title = styled.h1`
  margin-top: 0;
  font-family: ${theme.fontFamily}, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: ${theme.primaryColor};
  font-size: ${theme.titleSize}px;
  line-height: ${theme.lineHeight}rem;
  letter-spacing: ${theme.letterSpacing}rem;
  text-align: center;
`;

const Container = styled.div`
  padding-top: 2%;
  text-align: center;
`;

const Logo = styled.img`
  width: 100px;
`;

const App = () => {
  return (
    <Container>
      <Logo src={logo} alt="" />
      <Title>CRYPTO FOLIO.</Title>
      <Trend />
      <TableMarket />
    </Container>
  );
};

export default App;
