const express = require('express')
const { HomeController, postCreateUser, getCreatePage } = require('../controllers/homeController')
const router = express.Router()


router.get('/', HomeController);
router.get('/create', getCreatePage)
router.post('/create-user', postCreateUser)


module.exports = router;