const mariadb = require("mariadb");

const pool = mariadb.createPool({
    host: '163.172.130.142',
    port: '3310',
    user: 'etudiant',
    password: 'CrERP29qwMNvcbnAMgLzW9CwuTC5eJHn',
    database: 'sakila'
});

module.exports = pool;