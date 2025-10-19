const express = require('express')
const { HomeController, postCreateUser } = require('../controllers/homeController')
const router = express.Router()


router.get('/', HomeController);

router.post('/create-user', postCreateUser)

module.exports = router;