require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');
const { default: mongoose } = require('mongoose');
const Kitten = require('./models/Kitten');

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

const cat = new Kitten({ name: 'model' });
cat.save();

(async () => {
    try {
        await connection();
        app.listen(port, hostname, () => {
            console.log(`back end zero app listening on port ${port}`)
        })
    } catch (error) {
        console.log(">>> Error connect to DB : ", error)
    }
})()


