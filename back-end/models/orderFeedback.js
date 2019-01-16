const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderFeedbackSchema = mongoose.Schema({
  user: {
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    name: String,
    email: String,
  },

  order_id: String,

  product: {
    product_id: String,
    name: String,
    price: String,
  },
  
  rate: Number,
  feedback: String,
  canReply: Boolean,

  created_at: Date,
  updated_at: Date,
});


orderFeedbackSchema.pre('save', (next) => {
  var currentDate = new Date();
  
  this.updated_at = currentDate;
  if (!this.created_at) {
    this.created_at = currentDate;
  }

  next();
});

module.exports = mongoose.model('OrderFeedback', orderFeedbackSchema);
