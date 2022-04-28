
const mysql = require('mysql');

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "postiny",
    insecureAuth : true
});

module.exports = pool;