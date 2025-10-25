const express = require('express');
const { getUsersApi, postCreateUsersApi, putUpdateUsersApi, deleteUserApi, postUploadSingleFileApi, postUploadMultipleFileApi } = require('../controllers/apiController');
const { postCreateCustomerApi, postCreateArrayCustomerApi, getAllCustomerApi, putUpdateCustomerApi } = require('../controllers/customerController');
const routerAPI = express.Router()


routerAPI.get('/users', getUsersApi);
routerAPI.post('/users', postCreateUsersApi);
routerAPI.put('/users', putUpdateUsersApi);
routerAPI.delete('/users', deleteUserApi);

routerAPI.post('/file', postUploadSingleFileApi);
routerAPI.post('/files', postUploadMultipleFileApi);

routerAPI.get('/customers', getAllCustomerApi);
routerAPI.post('/customers', postCreateCustomerApi);
routerAPI.post('/customers-many', postCreateArrayCustomerApi);
routerAPI.put('/customers', putUpdateCustomerApi);

module.exports = routerAPI;