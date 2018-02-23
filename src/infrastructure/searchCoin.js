function fetchInformationByCoin(name) {
  const URL_ICON = 'http://coincodex.com/en/resources/images/admin/coins/';
  const url = `https://api.coinmarketcap.com/v1/ticker/${name}/`;
  return fetch(url, { method: 'GET' })
    .then(res => res.json())
    .then((res) => {
      const coinFound = Array.isArray(res);
      if (coinFound) {
        return Object.assign({}, res[0], { icon: `${URL_ICON}${res[0].name}` });
      }
    })
    .catch(({ code: 'ERROR_FETCH', message: `Error for coin ${name}.` }));
}

export default fetchInformationByCoin;
