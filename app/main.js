import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { IntlProvider } from 'react-intl';

import Root from './config/Root';

const render = (Component) => {
  ReactDOM.render(
    <IntlProvider locale="en">
      <AppContainer>
        <Component />
      </AppContainer>
    </IntlProvider>,
    document.getElementById('root'),
  );
};

render(Root);

if (module.hot) {
  module.hot.accept('./config/Root', () => {
    const newApp = require('./config/Root').default;
    render(newApp);
  });
}
