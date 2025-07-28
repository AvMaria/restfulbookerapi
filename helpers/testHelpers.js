const axios = require('axios');

/**
 * Retries an HTTP request a  specified number of times.
 *
 * @Param {Function} requestFn - A function that return an axios request.
 * @Param {Number} retries - Number of retry attempts.
 * @Param {Number} delay - Delay between retries in milliseconds.
 * @Retuns {Promise} Axios response.
 */
async function retryRequest(requestFn, retries = 3, delay = 6000) {
  for (attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await requestFn();
      return response;
    } catch (err) {
      const waitTime = delay * Math.pow(2, attempt);
      if (attempt === retries) {
        throw new Error(`Request failed after ${attempt} attempt(s). Error: ${err.message}`);
      }
      console.log(` Waiting ${waitTime}ms before retrying...\n`);

      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, waitTime);
      });
    }
  }
}

module.exports = { retryRequest };
