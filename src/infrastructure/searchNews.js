const Parser = require('rss-parser');

const parser = new Parser();

async function fetchNews() {
  const urlRss = 'https://cointelegraph.com/rss';
  const feed = await parser.parseURL(urlRss);
  return feed.items.map(i => i.title).join('.  -  ');
}

export default fetchNews;
