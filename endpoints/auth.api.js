require('dotenv').config();
const axios = require('axios');
class AuthAPI {
  constructor() {
    this.token = null;
  }

  async getToken(url, user, pass) {
    if (this.token) return this.token;

    const response = await axios.post(`${url}/auth`, {
      username: user,
      password: pass,
    });

    if (response.status === 200 && response.data.token) {
      this.token = response.data.token;
      return response;
    } else {
      throw new Error('Authentication failed');
    }
  }

  resetToken() {
    this.token = null;
  }
}
module.exports = new AuthAPI();
