const axios = require('axios');

module.exports = async ({ baseUrl, query, page, perPage }) => {
  const params = {
    index: 'concepts_index',
    query: query,
    offset: (page - 1) * perPage,
    size: perPage,
  }
  try {
    const response = await axios.post(`${ baseUrl }/search`, params)
    if (response.status === 200 && response.data.status === 'success' && response.data.result) {
      return {
        hits: response.data.result.hits.hits,
        total_items: response.data.result.total_items,
        concept_types: response.data.result.concept_types,
      }
    }
    throw new Error('Something went wrong while fetching concepts.')
  } catch(error) {
    console.error(error.message)
    return []
  }
  return null
}
