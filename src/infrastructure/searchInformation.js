function fetchInformationByCoin(coin) {
  return fetch(coin.link, { method: 'GET' })
    .then(res => res.json())
    .then((res) => {
      return Object.assign({}, coin, res[0], {
        totalPrice: res[0].price_usd * coin.hodl,
        totalBTC: res[0].price_btc * coin.hodl,
      });
    })
    .catch(({ code: 'ERROR_FETCH', message: `Error for coin ${coin.symbol} link : ${coin.information}` }));
}

function fetchInformation(coins) {
  return Promise.all(coins.map(fetchInformationByCoin))
    .then(res => res.sort((a, b) => (b.totalPrice - a.totalPrice)));
}

export default fetchInformation;
