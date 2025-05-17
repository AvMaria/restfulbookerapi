const { expect } = require('chai');
const Endpoints = require('../api/endpoints.api');
const AuthAPI = require('../api/auth.api');
const bookingData = require('../testData/invalidBookingData.json');

describe('Booking API', () => {
  beforeEach(() => {
    AuthAPI.resetToken();
  });

  it('should not retrieve a booking', async () => {
    const res = await Endpoints.getBooking(
      bookingData.invalidBooking.bookingID
    );

    expect(res.status).to.not.be.oneOf([200, 500]);
  });
});
