import React from 'react';

import XLM from '../../assets/icons/coins/xlm.svg';

const coin = {
  hodl: 100.879,
  name: 'Stellar',
  symbol: 'XLM',
  icon: <img src={XLM} alt="XLM" />,
  link: 'https://api.coinmarketcap.com/v1/ticker/stellar/',
};

export default coin;
