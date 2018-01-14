import React from 'react';
import styled from 'styled-components';
import theme from '../config/theme';

import TableMarket from './TableMarket';

const Title = styled.h1`
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
`;

const App = () => {
  return (
    <Container>
      <Title>Crypto Folio</Title>
      <TableMarket />
    </Container>
  );
};

export default App;
