const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database');

// Connect to database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', ()=>{
  console.log('Connected to database'+config.database)
});

// On Error
mongoose.connection.on('err', (err)=>{
  console.log('Database error: ' + err)
});

const app = express();
const posts = require('./routes/postRoutes');
const users = require('./routes/userRoutes');

// Port Number
const port = process.env.PORT || 8080;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, './public')));

// Body Pareser Middleware
app.use(bodyParser.json());


app.use('/posts', posts);
app.use('/users', users);

// Index Route
app.get('/', (req, res) =>{
  res.send("Invalid End point")
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html' +
    ''))
});

// Start Server
app.listen(port, () => {
  console.log("Server Started on port " + port)
});
