require('dotenv').config();

console.log(process.env.DB_USER, process.env.DB_PASS, process.env.DB_NAME, process.env.DB_HOST)

const options = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: 'mysql',
};

module.exports = {
  development: options,
  local: options,
  production: options,
};
