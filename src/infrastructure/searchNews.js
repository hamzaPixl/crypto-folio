const rss = require('rss-to-json');

function fetchNews() {
  const urlRss = 'https://cointelegraph.com/rss';
  return new Promise((resolve, reject) => {
    return rss.load(urlRss, (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res.items.map(i => i.title).join(' - '));
    });
  });
}

export default fetchNews;
