const express = require('express')
const path = require('path')
require('dotenv').config()



const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//config static file
app.use('/static', express.static(path.join(__dirname, 'public')))



app.get('/', (req, res) => {
    res.send('Hello World! anh thuan')
})

app.get('/thuan', (req, res) => {
    res.render('sample')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
