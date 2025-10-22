const express = require('express')
const { HomeController, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser, postDeleteUser, postHandleRemoveUser } = require('../controllers/homeController')
const router = express.Router()


router.get('/', HomeController);
router.get('/create', getCreatePage)
router.post('/create-user', postCreateUser)
router.get('/update/:id', getUpdatePage)
router.post('/update-user', postUpdateUser)
router.post('/delete-user/:id', postDeleteUser)
router.post('/delete-user', postHandleRemoveUser)


module.exports = router;