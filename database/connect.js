const mysql = require('mysql2/promise');


function connect(){


    return mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: "root",
        password: "Lieslrae69",
        database: "employee_cms"
    })



}

module.exports ={
    connect
}