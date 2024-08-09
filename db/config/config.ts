// import dotenv from 'dotenv';
// dotenv.config({ path: '.env' });

console.log(process.env.DB_USER, process.env.DB_PASS, process.env.DB_NAME, process.env.DB_HOST)

const options = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: 'mysql'
};

export const development = options;
export const local = options;
export const production = options;

export default {
  local,
  development,
  production,
};
