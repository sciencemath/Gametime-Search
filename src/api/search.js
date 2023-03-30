const BASE_URL = 'https://mobile-staging.gametime.co';

/**
 *
 * @param {string} searchTerm
 * @returns {{}}
 */
export const searchResults = async (searchTerm) => {
  try {
    const eventResponse = await fetch(`${BASE_URL}/v1/search?q=${searchTerm}`);
    return eventResponse.json();
  } catch (error) {
    console.error(`Handle Error ${error}`);
    return error;
  }
};
