const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = mongoose.Schema({
  order_id: String,
  
  user: {
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    name: String,
    email: String,
  },

  shipping_info: {
    address: String,
    zip: String,
    state: String,
    delivery_date: String,
  },

  products: [{
    product_id: String,
    product_name: String,
    quantity: Number,
    unit_price: String,
    total_price: String,
  }],

  special_instruction: String,

  status: String,
  total_price: String,

  created_at: Date,
  updated_at: Date,
});


orderSchema.pre('save', (next) => {
  var currentDate = new Date();
  
  this.updated_at = currentDate;
  if (!this.created_at) {
    this.created_at = currentDate;
  }

  next();
});

module.exports = mongoose.model('Order', orderSchema);
