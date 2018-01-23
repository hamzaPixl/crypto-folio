import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import Root from './config/Root';
import store from './utils/store';

ReactDOM.render(
  <MuiThemeProvider>
    <IntlProvider locale="en">
      <Provider store={store}>
        <Root />
      </Provider>
    </IntlProvider>
  </MuiThemeProvider>,
  document.getElementById('root'),
);
registerServiceWorker();
