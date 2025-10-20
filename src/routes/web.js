const express = require('express')
const { HomeController, postCreateUser, getCreatePage, getUpdatePage } = require('../controllers/homeController')
const router = express.Router()


router.get('/', HomeController);
router.get('/create', getCreatePage)
router.post('/create-user', postCreateUser)
router.get('/update', getUpdatePage)


module.exports = router;