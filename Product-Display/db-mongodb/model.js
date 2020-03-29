const db = require('./');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  sub_category: String,
  model: String,
  publisher: String,
  sku: String,
  product_sku: String,
  release_date: String,
  esrb_rating: String,
  price: Number,
  images: [String],
  compatible_platforms: [String],
  software_format: [String],
  geek_squad_price: Number,
  description: String,
  features: String,
  included: String,
  header_titles: [String],
  still_img_videos: [String],
  miniplayer_videos: [String],
  video_length: [String],
  reviews_count: Number,
  reviews_breakdown: [Number],
  keyspecs_title: [String],
  keyspecs : [String],
  general_title: [String],
  general: [String],
  game_Details_title: [String],
  game_details: [String],
  requirements_title: [String],
  requirements: [String],
  other_title: [String],
  other: String,
  questions: Number,
  bundle: String,
  bundle_total : [Number],
  manufacturer_img: String,
  questions_img: String
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;