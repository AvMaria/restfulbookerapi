const axios = require('axios');
const AuthAPI = require('./auth.api');
const { retryRequest } = require('../../helpers/testHelpers');

class BookingAPI {
  async getHealthStatus() {
    const response = await retryRequest(() =>
      axios.get(`${process.env.API_URL}/ping`)
    );
    return response;
  }

  async createBooking(data) {
    let response;
    try {
      response = await axios.post(`${process.env.API_URL}/booking`, data, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      return response;
    } catch (error) {
      return error.response;
    }
  }

  async getBooking(id) {
    try {
      const token = await AuthAPI.getToken();

      const response = await axios.get(`${process.env.API_URL}/booking/${id}`, {
        headers: {
          Accept: 'application/json',
        },
      });

      return response;
    } catch (error) {
      console.error('Booking consultation failed:', error.response?.status, error.response?.data);

      return error.response;
    }
  }

  async updateBooking(id, updateData) {
    try {
      const token = await AuthAPI.getToken();

      const response = await axios.put(`${process.env.API_URL}/booking/${id}`, updateData, {
        headers: {
          Cookie: `token=${token}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      return response;
    } catch (error) {
      console.error('Booking update failed:', error.response?.status, error.response?.data);
      return error.response;
    }
  }

  async deleteBooking(id) {
    try {
      const token = await AuthAPI.getToken();

      const response = await axios.delete(`${process.env.API_URL}/booking/${id}`, {
        headers: {
          Cookie: `token=${token}`,
        },
      });

      return response;
    } catch (error) {
      console.error('Booking deletion failed:', error.response?.status);
      return error.response;
    }
  }
}

module.exports = new BookingAPI();
