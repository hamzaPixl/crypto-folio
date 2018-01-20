import React from 'react';

import XRP from '../../assets/icons/coins/xrp.svg';

const coin = {
  hodl: 100.649,
  name: 'Ripple',
  symbol: 'XRP',
  icon: <img src={XRP} alt="XRP" />,
  link: 'https://api.coinmarketcap.com/v1/ticker/ripple/',
};

export default coin;
