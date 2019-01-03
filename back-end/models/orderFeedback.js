const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderFeedbackSchema = mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  order_id: String,
  product_id: String,
  
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
