/*
 Author:AmirSaber Sharifi
 Language: JavaScript
 Framework: Nodejs
 Description: Configurations for database. It will create Pool for other files to access to database by it
 */
var mysql = require('mysql');
var config = require('./config')();

//Pool of connections to database, here we have only one connection. Use pool to avoid disconnect and reconnect issues
var pool = mysql.createPool({
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
});


exports.pool = pool;