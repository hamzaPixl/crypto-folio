import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../stories/Home';

const Root = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
    </Router>
  );
};

export default Root;

