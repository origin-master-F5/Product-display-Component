const Router = require('express').Router();
const controller = require('./controller');

Router.route('/')
  .get(controller.getAll)


module.exports = Router;