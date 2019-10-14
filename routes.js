const express = require('express');
const routes = express.Router();
const sessionController = require('./app/controllers/SessionController');

routes.get('/provasyscoin',sessionController.create);
module.exports = routes;
