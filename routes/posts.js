const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const Post = require('../models/post');
const config = require('../config/database');

// Add blog post
router.post('/savepost', (req, res, next) => {
  let newPost = new Post({
    title: req.body.title,
    author: req.body.author,
    body: req.body.body
  });

  Post.addPost(newPost, (err, post) =>{
    if(err){
      res.json({success: false, msg: "Failed to register user"})
    }
    else {
      res.json({success: true, msg: "Saved post"})
    }
  })
});

router.get('/getposts', (req, res, next) => {
  Post.getAllPosts((err, post) => {
    if (err){
      res.json({success: false, msg: "Error retrieving posts"});
    }
    if (post){
      res.json({posts: post})
    }
    else{
      res.json({success: false, msg: "Failed to retrieve posts"});
    }
  })
});

module.exports = router;
