import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { IntlProvider } from 'react-intl';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';

import Root from './config/Root';
import store from './utils/store';

const render = (Component) => {
  ReactDOM.render(
    <MuiThemeProvider>
      <IntlProvider locale="en">
        <AppContainer>
          <Provider store={store}>
            <Component />
          </Provider>
        </AppContainer>
      </IntlProvider>
    </MuiThemeProvider>,
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
