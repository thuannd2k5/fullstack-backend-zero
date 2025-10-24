const express = require('express');
const { getUsersApi, postCreateUsersApi, putUpdateUsersApi, deleteUserApi, postUploadSingleFileApi } = require('../controllers/apiController');
const routerAPI = express.Router()


routerAPI.get('/users', getUsersApi);

routerAPI.post('/users', postCreateUsersApi);

routerAPI.put('/users', putUpdateUsersApi);

routerAPI.delete('/users', deleteUserApi);

routerAPI.post('/file', postUploadSingleFileApi);

module.exports = routerAPI;