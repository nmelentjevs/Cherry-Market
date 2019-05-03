const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  imageURL: {
    type: String
  },
  onSale: {
    type: Boolean
  },
  isFeatured: {
    type: Boolean
  },
  createDate: {
    type: Date,
    default: Date.now
  }
});

const Items = mongoose.model('Item', ItemsSchema);

module.exports = Items;
