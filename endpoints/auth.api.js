require('dotenv').config();
const axios = require('axios');
class AuthAPI {
  constructor() {
    this.token = null;
  }

  async getToken(url, user, pass) {
    //Check this one latter
    if (this.token) return this.token;
    try {
      const response = await axios.post(`${url}/auth`, {
        username: user,
        password: pass,
      });

      if (response.status === 200 && response.data.token) {
        this.token = response.data.token;
      }
      return response;
    } catch (error) {
      if (error.response) {
        console.log('ERROR RESPONSE FROM SERVER:');
        console.log('Status:', error.response.status);
        console.log('Headers:', error.response.headers);
        console.log('Body:', error.response.data);
        return error.response;
      } else {
        console.log('Error details:', error.message);
        return {
          status: 500,
          data: { message: error.message || 'Unknown error' },
        };
      }
    }
  }

  resetToken() {
    this.token = null;
  }
}
module.exports = AuthAPI;
