const express = require('express');
const { getUsersApi, postCreateUsersApi, putUpdateUsersApi, deleteUserApi, postUploadSingleFileApi, postUploadMultipleFileApi } = require('../controllers/apiController');
const { postCreateCustomerApi, postCreateArrayCustomerApi, getAllCustomerApi, putUpdateCustomerApi, deleteCustomerApi, deleteArrayCustomerApi } = require('../controllers/customerController');
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
routerAPI.delete('/customers', deleteCustomerApi);
routerAPI.delete('/customers-many', deleteArrayCustomerApi);


routerAPI.get('/info', (req, res) => {
    console.log("req.query", req.query);
    return res.status(200).json({
        errorCode: 0,
        data: req.query
    })
});

routerAPI.get('/info/:address/:name', (req, res) => {
    console.log("req.params", req.params);
    return res.status(200).json({
        errorCode: 0,
        data: req.params
    })
});

module.exports = routerAPI;