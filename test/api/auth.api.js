require('dotenv').config();
const axios = require('axios');
class AuthAPI {
  constructor() {
    this.token = null;
  }

  async getToken() {
    if (this.token) return this.token;

    const response = await axios.post(`${process.env.API_URL}/auth`, {
      username: process.env.API_USERNAME,
      password: process.env.API_PASSWORD,
    });

    if (response.status === 200 && response.data.token) {
      this.token = response.data.token;
      return this.token;
    } else {
      throw new Error('Authentication failed');
    }
  }

  resetToken() {
    this.token = null;
  }
}
module.exports = new AuthAPI();
