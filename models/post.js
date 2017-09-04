const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    required: true
  }
});

const Post = module.exports = mongoose.model('Post', PostSchema);

module.exports.getPostById = function (id, callback) {
  Post.findById(id, callback);
};

module.exports.getAllPosts = function (callback) {
  Post.find(callback);
};


module.exports.addPost = function (newPost, callback) {
  newPost.save(callback);
};

module.exports.deleteSinglePost = function (id, callback) {
  Post.deleteOne({ _id: id }, callback)
};

