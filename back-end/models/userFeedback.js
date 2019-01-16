const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userFeedbackSchema = mongoose.Schema({
  user: {
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    customer_id: String,
    name: String,
    email: String,
  },
  
  rate: Number,
  feedback: String,
  canReply: Boolean,

  created_at: Date,
  updated_at: Date,
});


userFeedbackSchema.pre('save', (next) => {
  var currentDate = new Date();
  
  this.updated_at = currentDate;
  if (!this.created_at) {
    this.created_at = currentDate;
  }

  next();
});

module.exports = mongoose.model('UserFeedback', userFeedbackSchema);
