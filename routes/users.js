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
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }],
  
  dp: {
    type: String // Assuming dp stands for display picture and it's a URL
  },
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
const User = mongoose.model('User', userSchema);

module.exports = User;
