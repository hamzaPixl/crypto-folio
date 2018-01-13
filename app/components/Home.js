import React from 'react';
import styled from 'styled-components';
import theme from '../config/theme';

const Title = styled.h1`
  font-family: ${theme.fontFamily}, sans-serif;
  color: ${theme.primaryColor};
  font-size: ${theme.titleSize}px;
  text-align: center;
  padding-top: 2%;
`;

const Container = styled.div`
`;

const App = () => {
  return (
    <Container>
      <Title>Crypto folio</Title>
    </Container>
  );
};

export default App;
