const db = require('./');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const productSchema = new mongoose.Schema({
  name: String,
  model: String,
  publisher: String,
  sku: String,
  product_sku: String,
  release_date: String,
  esrb_rating: String,
  price: String,
  images: String,
  compatible_platforms: [String],
  software_format: [String],
  geek_squad: String,
  description: String,
  features: String,
  included: String


});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;