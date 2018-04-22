import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
import Root from './config/Root';

ReactDOM.render(
  <MuiThemeProvider>
    <IntlProvider locale="en">
      <Root />
    </IntlProvider>
  </MuiThemeProvider>,
  document.getElementById('root'),
);
registerServiceWorker();
