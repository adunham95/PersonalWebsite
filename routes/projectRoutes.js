const express = require('express');
const router = express.Router();

const Project = require('../models/projectModel');
const config = require('../config/database');

// Add blog post
router.post('/savepost', (req, res, next) => {
  let newProject = new Project({
    name: req.body.name,
    position: req.body.position,
    description: req.body.description,
    githubURL: req.body.githubURL,
    projectURL: req.body.projectURL
  });

  Project.addPost(newProject, (err, post) =>{
    if(err){
      res.json({success: false, msg: "Failed to add project"})
    }
    else {
      res.json({success: true, msg: "Saved project"})
    }
  })
});

router.get('/getprojects', (req, res, next) => {
  Project.getAllPosts((err, projects) => {
    if (err){
      res.json({success: false, msg: "Error retrieving projects"});
    }
    if (projects){
      res.json({projects: projects})
    }
    else{
      res.json({success: false, msg: "Failed to retrieve projects"});
    }
  })
});

router.post('/deleteproject', (req, res, next) => {
  let id = req.body._id;
  Project.deleteSinglePost(id, (err =>{
    if (err) {
      res.json({success: false, msg: "Error deleting project"});
    }
    else {
      res.json({success: true, msg: "Deleted project"});
    }
  }))
});

router.post('/update', (req, res, next) => {
  let id= req.body._id;
  let name= req.body.name;
  Project.updateProject(id, (err =>{
    if (err) {
      res.json({success: false, msg: "Error deleting project"});
    }
    else {
      res.json({success: true, msg: "Deleted project"});
    }
  }))
});

module.exports = router;
