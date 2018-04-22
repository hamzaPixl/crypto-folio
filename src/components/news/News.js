import PropTypes from 'prop-types';
import React from 'react';
import { Container, Title } from './News.style';

function News(props) {
  return (
    <Container>
      <Title>{props.news}</Title>
    </Container>
  );
}

News.propTypes = {
  news: PropTypes.string.isRequired,
};

export default News;
