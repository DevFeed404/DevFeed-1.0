require("dotenv").config();
const mysql = require('mysql2');
const util = require('util');

const { DATABASE_HOST, DATABASE_USER, DATABASE_PASSWORD, DATABASE_PORT, DATABASE_NAME } = process.env;

const db = mysql.createConnection({
    host: DATABASE_HOST,
    user: DATABASE_USER,
    password: DATABASE_PASSWORD,
    port: DATABASE_PORT,
    database: DATABASE_NAME
})
const dbConnect = util.promisify(db.connect).bind(db);

(async () => {
    try {
        await dbConnect();
        console.log("Connection created with the database successfully");
    } catch (err) {
        console.error("An error occurred while connecting: ", err);
    }
})();

module.exports = db;