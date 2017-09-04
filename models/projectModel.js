const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const ProjectSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  githubURL: {
    type: String,
    required: true
  },
  projectURL: {
    type: String,
    required: true
  }
});

const Project = module.exports = mongoose.model('Project', ProjectSchema);

module.exports.getPostById = function (id, callback) {
  Project.findById(id, callback);
};

module.exports.getAllPosts = function (callback) {
  Project.find(callback);
};


module.exports.addPost = function (newProject, callback) {
  newProject.save(callback);
};

module.exports.deleteSinglePost = function (id, callback) {
  Project.deleteOne({ _id: id }, callback)
};

module.exports.updateProject = function (id, callback) {
  Project.where({_id: userID}).update({active: userStatus, location: userLocation}, callback);
};

