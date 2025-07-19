## Overview

Automated API regression test suite for RestFulbooker using WebdriverIo, Node.js ,Mocha, Chai and axios.

## Features

- Automated API testing with WebdriverIO
- Test organization and execution using Mocha
- Assertions and validations with Chai
- Easy integration and extensibility

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/)

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/AvMaria/restfulbookerapi.git
cd restfulBookerAPITestig
npm install
```




Create a `.env` file in the root directory of the project with the following content:

```env
API_USERNAME=admin
API_PASSWORD=password123
API_URL=https://restful-booker.herokuapp.com
```

## Running Tests

To execute the test suite, run:

```bash
npm test
```

## Project Structure

- `test/` - Contains all test specifications
- `wdio.conf.js` - WebdriverIO configuration file

## Traceability Matrix
## 🧾 Traceability Matrix

| Requirement ID | Requirement Description                      | Endpoint(s)   | Test Case ID(s) | Test Description                                       |
|----------------|-----------------------------------------------|---------------|------------------|--------------------------------------------------------|
| RQ001          | API should respond to a health check          | `GET /ping`   | TC001           | Verify API returns 201 with "Created" (known bug)      |
| RQ002          | API should authenticate valid users           | `POST /auth`  | TC002           | Valid credentials return a token                       |
| RQ003          | API should reject invalid authentication      | `POST /auth`  | TC003           | Invalid credentials return "Bad credentials"           |
| RQ004          | API should allow creating a booking           | `POST /booking` | TC004         | Valid booking returns 200 and booking ID               |
| RQ005          | API should validate required booking fields   | `POST /booking` | TC005         | Missing fields return error (500 or validation)        |
