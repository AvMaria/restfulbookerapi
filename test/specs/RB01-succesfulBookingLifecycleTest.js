const { expect } = require('chai');
const Endpoints = require('../api/endpoints.api');
const AuthAPI = require('../api/auth.api');
const bookingData = require('../testData/validBookingData.json');

describe('Booking API', () => {
  let bookingId;

  beforeEach(() => {
    AuthAPI.resetToken();
  });

  it('should create a booking', async () => {
    const res = await Endpoints.createBooking(bookingData.validBooking);

    expect(res.status).to.equal(200);
    expect(res.data).to.have.property('bookingid');
    bookingId = res.data.bookingid;
  });

  it('should retrieve a new booking', async () => {
    const res = await Endpoints.getBooking(bookingId);

    expect(res.status).to.equal(200);
    expect(res.data).to.deep.include(bookingData.validBooking);
  });

  it('should update a booking', async () => {
    const res = await Endpoints.updateBooking(bookingId, bookingData.updateBooking);

    expect(res.status).to.equal(200);
    expect(res.data).to.deep.include(bookingData.updateBooking);
  });

  it('should delete a booking', async () => {
    const res = await Endpoints.deleteBooking(bookingId);

    expect(res.status).to.equal(201);
    expect(res.data).to.include('Created');
  });
});
