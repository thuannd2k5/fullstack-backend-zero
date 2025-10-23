const express = require('express');
const { getUsersApi } = require('../controllers/apiController');
const routerAPI = express.Router()


routerAPI.get('/', (req, res) => {
    res.send("hello world with api")
});

routerAPI.get('/users', getUsersApi);

module.exports = routerAPI;