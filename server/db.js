
const mysql = require('mysql2');
const db = mysql.createConnection({
host: "mysql-124301-0.cloudclusters.net",
user: "admin",
password: "YeT6ToDm",
port : 12800,
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