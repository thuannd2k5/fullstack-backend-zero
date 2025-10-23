const express = require('express');
const { getUsersApi, postCreateUsersApi, putUpdateUsersApi } = require('../controllers/apiController');
const routerAPI = express.Router()


routerAPI.get('/users', getUsersApi);

routerAPI.post('/users', postCreateUsersApi);

routerAPI.put('/users', putUpdateUsersApi);

module.exports = routerAPI;