/*
 Author:AmirSaber Sharifi
 Language: JavaScript
 Framework: Nodejs
 Description: Entry point of application
 */ 
var debug = require('debug')('Sakila');
var config = require('../config')();
var app = require('../app');

//Setting port of server based on configuration
app.set('port', config.port || 3000);

//Starting Server
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});