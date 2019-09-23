const mysql = require('mysql2/promise');
const config = require('../config');

const pool = mysql.createPool({
  host: config.dbHost,
  port: config.dbPort,
  user: config.dbUser,
  password: config.dbPassword,
  database: config.dbDatabase
});

pool.on('acquire', (connection) => {
  console.info(`Connection ${connection.threadId} acquired`);
});

// pool.on('connection', (connection) => {
//   connection.query('SET SESSION auto_increment=1');
// });

pool.on('enqueue', () => {
  console.info('Waiting for available connection slot');
});

pool.on('release', (connection) => {
  console.info(`Connection ${connection.threadId} released`);
});

module.exports = pool;
