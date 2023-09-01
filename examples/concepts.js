const Dug = require('dug-js');

const dug = new Dug('https://search.biodatacatalyst.renci.org/search-api');

(async () => {
  const concepts = await dug.fetchConcepts({ query: 'heart', page: 1 });
  console.log(concepts);
})();
