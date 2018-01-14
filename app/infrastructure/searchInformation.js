const fetch = require('fetch');

function fetchInformation(coin) {
  return fetch(coin.information, { method: 'GET' })
    .then(res => res.json())
    .then((res) => { return res[0]; })
    .catch(({ code: 'ERROR_FETCH', message: `Error for coin ${coin.symbol} link : ${coin.information}` }));
}

export default fetchInformation;
