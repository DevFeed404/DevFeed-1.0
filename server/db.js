
const mysql = require('mysql2');
require("dotenv").config();

const db = mysql.createConnection({
host: process.env.DATABASE_HOST,
user:  process.env.DATABASE_USER,
password:  process.env.DATABASE_PASSWORD,
port :  process.env.DATABASE_PORT,
database: process.env.DATABASE_NAME 
})
db.connect(function (err) {
    if(err){
        console.log("error occurred while connecting");
    }
    else{
        console.log("connection created with database successfully");
    }
 })

module.exports = db;