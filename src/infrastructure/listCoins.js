function fetchListCoin() {
  const LIST_URL = 'https://api.coinmarketcap.com/v1/ticker/';
  return fetch(LIST_URL, { method: 'GET' })
    .then(res => res.json())
    .then(res => res)
    .catch(({ code: 'ERROR_FETCH', message: 'Error for LIST coins.' }));
}

export default fetchListCoin;
