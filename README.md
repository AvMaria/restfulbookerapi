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
| RQ006          | API should return a list of all booking IDs   | `GET /booking` | TC006         |Get all booking IDs
        |
| RQ007          | API should return booking details by ID   | `GET /booking/{id}` | TC007,TC008        |Valid ID returns booking; invalid ID returns 404
        |
| RQ008          | API should allow full booking update   | `PUT /booking/{id}` | TC009        |Full update with valid token returns updated booking
        |
| RQ009          | Booking updates should be rejected without a token   | `PUT /booking/{id}` | TC010        |PUT without token returns 403
        |    
| RQ010          | API should allow partial booking update   | `PATCH /booking/{id}` | TC011        |PATCH updates specific field(s)
        |           
| RQ011          | PATCH without token should be rejected   | `PATCH /booking/{id}` | TC012        |Returns 403 Forbidden
        | 
| RQ012          | API should allow deleting a booking with a token   | `DELETE /booking/{id}` | TC013        |Valid token allows booking deletion
        |       
| RQ013          | Deleting without a token should fail   | `DELETE /booking/{id}` | TC014        |Returns 403 Forbidden
        |        

