require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web')
const mysql = require('mysql2');

const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config view engine
configViewEngine(app);

//khai báo routes
app.use("/", webRoutes);


//test connection
// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: '123456',
    database: 'hoidanit'
});
connection.query(
    'SELECT * from Users u ;',
    function (err, results, fields) {
        console.log("results >>> : ", results); // results contains rows returned by server
        console.log("fields >>>: ", fields); // fields contains extra meta data about results, if available
    }
);


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})
