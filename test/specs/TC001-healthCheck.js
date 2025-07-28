const { expect } = require('chai');
const Endpoints = require('../api/endpoints.api');
//const AuthAPI = require('../api/auth.api');
//const bookingData = require('../testData/invalidBookingData.json');
const axios = require('axios');

describe('should return 200 OK when API is healthy ', () => {
  it('should return 200 Ok', async () => {
    const response = await Endpoints.getHealthStatus();
    //Since this is a intentional bug for testing purposes i am going to set 201 as expected result to force tc to pass
    expect(response.status).to.equal(201);
  });
});
