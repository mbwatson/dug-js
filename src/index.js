const requestConcepts = require('./requests/concepts.js');
const requestStudies = require('./requests/studies.js');

//

module.exports = class Dug {
  constructor(baseUrl, perPage = 20) {
    this.baseUrl = baseUrl;
    this.perPage = perPage;
  }

  fetchConcepts({ query, page }) {
    return requestConcepts({
      baseUrl: this.baseUrl,
      perPage: this.perPage,
      query,
      page,
    })
  }

  fetchStudies({ conceptId, query }) {
    return requestStudies({
      baseUrl: this.baseUrl,
      perPage: this.perPage,
      conceptId,
      query,
    })
  }

};
