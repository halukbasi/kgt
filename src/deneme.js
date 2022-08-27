// import fetch from 'node-fetch'
// globalThis.fetch = fetch
// import fetch from 'cross-fetch';

fetch('http://example.com/movies.json')
  .then((response) => response.json())
  .then((data) => console.log(data));