import React from 'react';

import ADA from '../assets/icons/coins/ada.svg';
import XLM from '../assets/icons/coins/xlm.svg';
import XRP from '../assets/icons/coins/xrp.svg';
import ETH from '../assets/icons/coins/eth.svg';
import CND from '../assets/icons/coins/cnd.png';
import TRX from '../assets/icons/coins/trx.svg';
import XVG from '../assets/icons/coins/xvg.svg';

const Wallet = [
  {
    hodl: 0.30223045,
    name: 'Ethereum',
    symbol: 'ETH',
    icon: <img src={ETH} alt="ETH" />,
    information: 'https://api.coinmarketcap.com/v1/ticker/ethereum/',
  },
  {
    hodl: 100.649,
    name: 'Ripple',
    symbol: 'XRP',
    icon: <img src={XRP} alt="XRP" />,
    information: 'https://api.coinmarketcap.com/v1/ticker/ripple/',
  },
  {
    hodl: 74.915,
    name: 'Stellar',
    symbol: 'XLM',
    icon: <img src={XLM} alt="XLM" />,
    information: 'https://api.coinmarketcap.com/v1/ticker/stellar/',
  },
  {
    hodl: 291.104,
    name: 'TRON',
    symbol: 'TRX',
    icon: <img src={TRX} alt="TRX" />,
    information: 'https://api.coinmarketcap.com/v1/ticker/tron/',
  },
  {
    hodl: 300.24918,
    name: 'Verge',
    symbol: 'XVG',
    icon: <img src={XVG} alt="XVG" />,
    information: 'https://api.coinmarketcap.com/v1/ticker/verge/',
  },
  {
    hodl: 24.975,
    name: 'Cardano',
    symbol: 'ADA',
    icon: <img src={ADA} alt="ADA" />,
    information: 'https://api.coinmarketcap.com/v1/ticker/cardano/',
  },
  {
    hodl: 70.846,
    name: 'Cindicator',
    symbol: 'CND',
    icon: <img width="30px" src={CND} alt="CND" />,
    information: 'https://api.coinmarketcap.com/v1/ticker/cindicator/',
  },

];

export default Wallet;
