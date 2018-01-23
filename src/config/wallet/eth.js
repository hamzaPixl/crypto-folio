import React from 'react';

import ETH from '../../assets/icons/coins/eth.svg';

const coin = {
  hodl: 0.39217761,
  name: 'Ethereum',
  symbol: 'ETH',
  icon: <img src={ETH} alt="ETH" />,
  link: 'https://api.coinmarketcap.com/v1/ticker/ethereum/',
};

export default coin;
