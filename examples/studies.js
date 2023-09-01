const Dug = require('dug-js');

const dug = new Dug('https://search.biodatacatalyst.renci.org/search-api');

(async () => {
  const studies = await dug.fetchStudies({ query: 'brain', conceptId: 'MONDO:0000115' });
  console.log(studies);
})();
