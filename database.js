/**
 * Created by amirsaber on 4/12/14.
 */
var mysql = require('mysql');

/*var connectionString = [];
if (process.env.CLEARDB_DATABASE_URL) {
    connectionString[0] = process.env.CLEARDB_DATABASE_URL;
}
else {
    connectionString[0] = 'mysql://b6dfafc00e1a20:620c2501@us-cdbr-east-05.cleardb.net/heroku_a9593bf841220c8?reconnect=true';
}*/

var pool = mysql.createPool({
    host: "us-cdbr-east-05.cleardb.net",
    user: "b6dfafc00e1a20",
    password: "620c2501",
    database: "heroku_a9593bf841220c8"
});


exports.pool = pool;