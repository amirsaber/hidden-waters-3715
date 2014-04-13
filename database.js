/**
 * Created by amirsaber on 4/12/14.
 */
var mysql = require('mysql');

var connectionString="";
if(process.env.CLEARDB_DATABASE_URL) {
    connectionString = process.env.CLEARDB_DATABASE_URL;
}
else {
    connectionString = 'mysql://b6dfafc00e1a20:620c2501@us-cdbr-east-05.cleardb.net/heroku_a9593bf841220c8?reconnect=true';
}

var connection  = mysql.createConnection(connectionString);


var connect = function(){
    connection.connect(function (err) {
        if (err) {
            throw err;
        }
        console.log('Database server connected');
    });
}

exports.db = connection;
exports.connect = connect;