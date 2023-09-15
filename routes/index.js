const routes = require('express').Router();

const myController = require('../controllers')

routes.get('/', myController.awesomeFunction);

module.exports = routes;