const Product = require('../db-mongodb/model');

module.exports = {
  getAll(req, res) {
    Product.find({})
    .then(product => {
      res.json(product);
    })
    .catch(err => {
      res.status(400).send('product not found', err);
    })
  }
}