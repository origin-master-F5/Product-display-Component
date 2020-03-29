const Router = require('express').Router();
const controller = require('./controller');
// PRODUCT DISPLAY

Router.route('/')

  .get(controller.getAll)

Router.route('/sku/:sku')
  .get(controller.getOne)

Router.route('/name/:name')
  .get(controller.getName)


module.exports = Router;