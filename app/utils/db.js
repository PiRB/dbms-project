const mariadb = require("mariadb");
require('dotenv').config()

const pool = mariadb.createPool({
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_SCHEMA
});

module.exports = pool;