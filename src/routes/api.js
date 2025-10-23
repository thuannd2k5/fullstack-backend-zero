const express = require('express');
const { getUsersApi, postCreateUsersApi } = require('../controllers/apiController');
const routerAPI = express.Router()


routerAPI.get('/users', getUsersApi);

routerAPI.post('/users', postCreateUsersApi);

module.exports = routerAPI;