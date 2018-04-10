import React from 'react';
import { Banner, Container, Title } from './News.style';

function News(props) {
  console.log(props);
  return (
    <Container>
      <Banner />
      <Title />
    </Container>
  );
}

export default News;
