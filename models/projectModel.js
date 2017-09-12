const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const ProjectSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  dateComplete: {
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
    type: String
  },
  imageURL: {
    type: String,
  },
  technology: {
    type: Array,
    required: true
  }

});

const Project = module.exports = mongoose.model('Project', ProjectSchema);

module.exports.getPostById = function (id, callback) {
  Project.findById(id, callback);
};

module.exports.getAllProjects = function (callback) {
  Project.find(callback);
};


module.exports.addProject = function (newProject, callback) {
  newProject.save(callback);
};

module.exports.deleteSingleProject = function (id, callback) {
  Project.deleteOne({ _id: id }, callback)
};

module.exports.updateProject = function (projectID, callback) {
  Project.where({_id: projectID}).update({}, callback);
};

