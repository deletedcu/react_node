const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
  email: String,
  email_lowercased: String,
  hashed_password: String,
  
  first_name: String,
  last_name: String,

  created_at: Date,
  updated_at: Date,
});


userSchema.pre('save', (next) => {
  var currentDate = new Date();
  
  this.updated_at = currentDate;
  if (!this.created_at) {
    this.created_at = currentDate;
  }

  next();
});

module.exports = mongoose.model('User', userSchema);
