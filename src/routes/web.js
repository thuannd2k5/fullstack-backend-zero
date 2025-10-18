const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.send('Hello World! anh thuan')
})

router.get('/thuan', (req, res) => {
    res.render('sample')
})

module.exports = router;