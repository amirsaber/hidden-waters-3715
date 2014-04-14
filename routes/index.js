/*
 Author:AmirSaber Sharifi
 Language: JavaScript
 Framework: Nodejs
 Description: Request for index file will route to here
 */
var express = require('express');
var router = express.Router();

//Redirect get request to index.jade in views with variable title
router.get('/', function(req, res) {
  res.render('index', { title: 'HCapital' });
});

module.exports = router;
