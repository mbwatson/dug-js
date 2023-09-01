const axios = require('axios');

module.exports = async ({ baseUrl, conceptId, query }) => {
  const params = {
    concept: conceptId,
    query: query,
    index: 'variables_index',
    size: 1000
  };
  try {
    const { data } = await axios.post(`${ baseUrl }/search_var`, params);
    if (data?.result?.total_items === 0) {
      return [];
    }
    // we can expect data.result to be an object shaped like:
    //   { dbgap: [studies], anvil: [studies], ... }
    // we'll transform this into an array, injecting the source into each study.
    const flattenedStudies = Object.keys(data.result).reduce((acc, source) => {
      return [
        ...acc,
        ...data.result[source].map(study => ({ ...study, source }))
      ];
    }, []).sort((s, t) => s.c_name.toLowerCase() < t.c_name.toLowerCase() ? -1 : 1);
    return flattenedStudies;
  } catch (error) {
    console.error(error.message);
    return [];
  }
}
