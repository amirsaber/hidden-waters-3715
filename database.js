/**
 * Created by amirsaber on 4/12/14.
 */
var mysql = require('mysql');
var config = require('./config')();

/*var connectionString = [];
if (process.env.CLEARDB_DATABASE_URL) {
    connectionString[0] = process.env.CLEARDB_DATABASE_URL;
}
else {
    connectionString[0] = 'mysql://b6dfafc00e1a20:620c2501@us-cdbr-east-05.cleardb.net/heroku_a9593bf841220c8?reconnect=true';
}*/

var pool = mysql.createPool({
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
});


exports.pool = pool;