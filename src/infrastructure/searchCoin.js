function fetchInformationByCoin(coin) {
  const URL_INFO = `https://api.coinmarketcap.com/v1/ticker/${coin.id}/`;
  return fetch(URL_INFO, { method: 'GET' })
    .then(res => res.json())
    .then(res => res[0])
    .catch(({ code: 'ERROR_FETCH', message: `Error for coin ${coin.value}.` }));
}

export default fetchInformationByCoin;
