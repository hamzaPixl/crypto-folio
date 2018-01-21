import React from 'react';

import TRX from '../../assets/icons/coins/trx.svg';

const coin = {
  hodl: 439.955,
  name: 'TRON',
  symbol: 'TRX',
  icon: <img src={TRX} alt="TRX" />,
  link: 'https://api.coinmarketcap.com/v1/ticker/tron/',
};

export default coin;
