import React from 'react';

import ADA from '../../assets/icons/coins/ada.svg';

const coin = {
  hodl: 40.959,
  name: 'Cardano',
  symbol: 'ADA',
  icon: <img src={ADA} alt="ADA" />,
  link: 'https://api.coinmarketcap.com/v1/ticker/cardano/',
};

export default coin;
