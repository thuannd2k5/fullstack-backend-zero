require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const APIRoutes = require('./routes/api');
const connection = require('./config/database');
const fileUpload = require('express-fileupload');
const { MongoClient } = require('mongodb');

const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config file upload
// default options
app.use(fileUpload());


//config view engine
configViewEngine(app);

//config get input form
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

//khai báo routes
app.use("/", webRoutes);
app.use("/v1/api", APIRoutes);

(async () => {
    try {
        //using mongoose
        await connection();


        app.listen(port, hostname, () => {
            console.log(`back end zero app listening on port ${port}`)
        })
    } catch (error) {
        console.log(">>> Error connect to DB : ", error)
    }
})()


