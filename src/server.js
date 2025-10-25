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
        // await connection();

        //using mongodb driver
        // Connection URL
        const url = process.env.DB_HOST_WITH_DRIVER;
        const client = new MongoClient(url);

        // Database Name
        const dbName = process.env.DB_NAME;

        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection('customers');

        // collection.insertOne({ "name": "nguyen thuan" })
        console.log(">>> find = ", await collection.findOne({ address: "hcm" }))

        //
        app.listen(port, hostname, () => {
            console.log(`back end zero app listening on port ${port}`)
        })
    } catch (error) {
        console.log(">>> Error connect to DB : ", error)
    }
})()


