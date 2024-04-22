const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect("mongodb://127.0.0.1:27017/newapp")

// Define the user schema
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  posts: [{
  }],
  
  email: {
    type: String,
    required: true,
    unique: true
  },
  fullName: {
    type: String
  }
});

// Create the User model
module.exports = mongoose.model('User', userSchema);


