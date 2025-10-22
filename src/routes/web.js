const express = require('express')
const { HomeController, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser } = require('../controllers/homeController')
const router = express.Router()


router.get('/', HomeController);
router.get('/create', getCreatePage)
router.post('/create-user', postCreateUser)
router.get('/update/:id', getUpdatePage)
router.post('/update-user', postUpdateUser)


module.exports = router;