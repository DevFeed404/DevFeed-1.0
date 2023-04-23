
const mysql = require('mysql2');
const db = mysql.createConnection({
host: "127.0.0.1",
user: "root",
password: "12345678",
port : 3306,
database:"devfeed" 
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