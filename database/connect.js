const mysql = require('mysql2/promise');
require('dotenv').config();
console.log(process.env.DB_USER); 

function connect(){

 
    return mysql.createConnection({
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: "employee_cms"
    })



}
 
module.exports ={
    connect
}