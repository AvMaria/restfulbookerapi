const { expect } = require('chai');
const Endpoints = require('../../endpoints/endpoints.api');
//onst AuthAPI = require('../../endpoints/auth.api');
const bookingData = require('../../testData/bookingData.json');
//const user1Api = new AuthAPI();
const url = process.env.API_URL

describe('Booking API', () => {
  it('returns 200 and booking details when a booking is created successfully', async () => {
    const response = await Endpoints.createBooking(url, bookingData.validBooking);
    //Response Status Assertions
    expect(response.status).to.equal(200);
    //Response Body Assertions
    expect(response.data.firstname).to.equal(bookingData.firstname);
    expect(response.data.lastname).to.equal(bookingData.lastname);
    expect(response.data.totalprice).to.equal(bookingData.totalprice);
    expect(response.data.depositpaid).to.equal(bookingData.depositpaid);
    expect(response.data.bookingdates).to.equal(bookingData.bookingdates);
    expect(response.data.additionalneeds).to.equal(bookingData.additionalneeds);
    expect(response.data.bookingid).to.be.a('Number');
    //Response Headers Assertions
    expect(response.headers['content-type']).to.include('application/json');
  });

  it('When sending an empty body should return 400 Bad Request status', async () => {
    const response = await Endpoints.createBooking(url, bookingData.emptyBooking);

    //Response Status Assertions
    expect(response.status).to.equal(400);
  });
});

