var mysql = require('mysql');
var config = require('./config.json');
var dbConfig = config.dbConfig;

var pool = mysql.createPool(dbConfig);

pool.getConnection((err, connection) => {
});

pool.on('error', (err) => {
  console.log(err);
});

module.exports = pool;
