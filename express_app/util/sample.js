const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'webservice',
    database: 'blogen',
    password: 'A7894_g2kk?h'
});

module.exports = pool.promise();