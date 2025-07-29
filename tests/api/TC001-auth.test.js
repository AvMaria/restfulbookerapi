const { expect } = require('chai');
require('dotenv').config();
const Endpoints = require('../../endpoints/endpoints.api');
const AuthAPI = require('../../endpoints/auth.api');
const bookingData = require('../../testData/validBookingData.json');

describe('Auth API - Login Endpoint', () => {
  it('should return a token for valid credentials (positive test)', async () => {
    const url = 'https://restful-booker.herokuapp.com';
    const user = 'admin';
    const pass = 'password123';

    const res = await AuthAPI.getToken(url, user, pass);

    expect(res.status).to.equal(200);
  });
});
//
//  it('should return 401 for invalid credentials (negative test)', async () => {
//    const res = await Endpoints.getBooking(bookingId);
//
//    expect(res.status).to.equal(200);
//    expect(res.data).to.deep.include(bookingData.validBooking);
//  });
//
//  it('should update a booking', async () => {
//    const res = await Endpoints.updateBooking(
//      bookingId,
//      bookingData.updateBooking
//    );
//
//    expect(res.status).to.equal(200);
//    expect(res.data).to.deep.include(bookingData.updateBooking);
//  });
//
//  it('should delete a booking', async () => {
//    const res = await Endpoints.deleteBooking(bookingId);
//
//    expect(res.status).to.equal(201);
//    expect(res.data).to.include('Created');
//  });
//});
