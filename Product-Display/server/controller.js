const Product = require('../db-mongodb/model');

module.exports = {
  getAll(req, res) {
    console.log('in the controller for port 3002');
    Product.find({})
    .then(product => {
      res.json(product);
    })
    .catch(err => {
      res.status(400).send('product not found', err);
    })
  },

  getOne(req, res) {
    console.log('in getOne', req.params);
    let sku = req.params.sku;
    Product.findOne({sku})
    .then(product => {
      res.json(product);
    })
    .catch(err => {
      res.status(400).send(`product sku:${sku} not found`, err);
    })
  },

  getName(req, res) {
    console.log('in getName', req.params);
    let name = req.params.name;
    Product.findOne({name})
    .then(product => {
      res.json(product);
    })
    .catch(err => {
      res.status(400).send(`product name:${name} not found`, err);
    })
  }
}