function fetchInformationByCoin(coin) {
  const URL_ICON = `https://files.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`;
  const URL_INFO = `https://api.coinmarketcap.com/v1/ticker/${coin.value}/`;
  return fetch(URL_INFO, { method: 'GET' })
    .then(res => res.json())
    .then(res => Object.assign({}, res[0], { icon: URL_ICON }))
    .catch(({ code: 'ERROR_FETCH', message: `Error for coin ${coin.value}.` }));
}

export default fetchInformationByCoin;
