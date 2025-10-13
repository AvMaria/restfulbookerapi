const { expect } = require('chai');
const AuthAPI = require('../../endpoints/auth.api');

const user1Api = new AuthAPI();
const user2Api = new AuthAPI();
const url = process.env.API_URL;
const user1 = process.env.API_USERNAME;
const pass1 = process.env.API_PASSWORD;
const user2 = process.env.API_INVUSERNAME;
const pass2 = process.env.API_INVPASSWORD;

describe('Auth API - Login Endpoint', () => {
  it('should return a token for valid credentials (positive test)', async () => {
    const response = await user1Api.getAuthResponse(url, user1, pass1);
    expect(response.status).to.equal(200);
    expect(response.headers['content-type']).to.include('application/json');
    expect(response.data).to.have.property('token').that.is.a('string');
  });

  it('should return 400 for invalid credentials with body message "Bad Credentials" (negative test)', async () => {
    const response = await user2Api.getAuthResponse(url, user2, pass2);
    expect(response.status).to.equal(200);
    expect(response.data).to.have.property('reason').to.include('Bad credentials');
  });
});
