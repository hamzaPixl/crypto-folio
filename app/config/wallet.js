/* eslint react/react-in-jsx-scope: 0 */
import * as Icon from 'react-cryptocoins';

const Wallet = [
  {
    hodl: 0.30223045,
    name: 'Ethereum',
    symbol: 'ETH',
    component: <Icon.Eth />,
  },
  {
    hodl: 100.649,
    name: 'Ripple',
    symbol: 'XRP',
    component: <Icon.Xrp />,
  },
  {
    hodl: 74.915,
    name: 'Stellar',
    symbol: 'XLM',
    component: <Icon.Xlm />,
  },
  {
    hodl: 291.104,
    name: 'TRON',
    symbol: 'TRX',
    component: <Icon.Trx />,
  },
  {
    hodl: 300.24918,
    name: 'Verge',
    symbol: 'XVG',
    component: <Icon.Xvg />,
  },
  {
    hodl: 24.975,
    name: 'Cardano',
    symbol: 'ADA',
    component: <Icon.Ada />,
  },

];

export default Wallet;
