process.env.NODE_ENV = 'test';
process.env.PUBLIC_URL = '';

// Load environment variables from .env file. Suppress warnings using silent
// if this file is missing. dotenv will never modify any environment variables
// that have already been set.
// https://github.com/motdotla/dotenv
require('dotenv').config({silent: true});

const jest = require('jest');
const argv = process.argv.slice(2);

console.log(argv)

// Watch unless on CI
// if (!process.env.CI) {
//   argv.push('--watchAll');
// }


jest.run(argv);
