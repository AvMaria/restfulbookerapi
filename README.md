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

## For the purposes of this exam, I will provide credentials in this file. However, 
## in a real-world scenario, these should be securely managed and integrated within a CI/CD pipeline.

## In the root directory of your project, create a file named .env

## Add the following environment variables:

API_USERNAME=admin
API_PASSWORD=password123
API_URL=https://restful-booker.herokuapp.com

## Running Tests

To execute the test suite, run:

```bash
npm test
```

## Project Structure

- `test/` - Contains all test specifications
- `wdio.conf.js` - WebdriverIO configuration file
