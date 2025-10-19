require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');

const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config view engine
configViewEngine(app);

//khai báo routes
app.use("/", webRoutes);


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})
