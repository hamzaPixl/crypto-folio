function fetchListCoin() {
  const LIST = 'https://files.coinmarketcap.com/generated/search/quick_search.json';
  return fetch(LIST, { method: 'GET' })
    .then(res => res.json())
    .then((res) => {
      return res;
    })
    .catch(({ code: 'ERROR_FETCH', message: 'Error for LIST coins.' }));
}

export default fetchListCoin;
