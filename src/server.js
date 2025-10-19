require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');

const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config view engine
configViewEngine(app);

//config get input form
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

//khai báo routes
app.use("/", webRoutes);


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})
