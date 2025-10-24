const express = require('express');
const { getUsersApi, postCreateUsersApi, putUpdateUsersApi, deleteUserApi, postUploadSingleFileApi, postUploadMultipleFileApi } = require('../controllers/apiController');
const { postCreateCustomerApi } = require('../controllers/customerController');
const routerAPI = express.Router()


routerAPI.get('/users', getUsersApi);
routerAPI.post('/users', postCreateUsersApi);
routerAPI.put('/users', putUpdateUsersApi);
routerAPI.delete('/users', deleteUserApi);

routerAPI.post('/file', postUploadSingleFileApi);
routerAPI.post('/files', postUploadMultipleFileApi);

routerAPI.post('/customers', postCreateCustomerApi);


module.exports = routerAPI;