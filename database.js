/**
 * Created by amirsaber on 4/12/14.
 */
var mysql = require('mysql');

var connectionString = "";
if (process.env.CLEARDB_DATABASE_URL) {
    connectionString = process.env.CLEARDB_DATABASE_URL;
}
else {
    connectionString = 'mysql://b6dfafc00e1a20:620c2501@us-cdbr-east-05.cleardb.net/heroku_a9593bf841220c8?reconnect=true';
}

var connection = mysql.createConnection(connectionString);


connection.connect(function (err) {
    if (err) {
        throw err;
    }
    console.log('Database server connected');
});

var reconnect = function handleDisconnect() {
    console.log('Handle Disconnect');
    connection = mysql.createConnection(connectionString); // Recreate the connection, since
    // the old one cannot be reused.

    connection.connect(function (err) {              // The server is either down
        if (err) {                                     // or restarting (takes a while sometimes).
            console.log('error when connecting to db:', err);
            setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
        }                                     // to avoid a hot loop, and to allow our node script to
    });                                     // process asynchronous requests in the meantime.
    // If you're also serving http, display a 503 error.
    connection.on('error', function (err) {
        console.log('db error', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
            handleDisconnect();                         // lost due to either server restart, or a
        } else {                                      // connnection idle timeout (the wait_timeout
            throw err;                                  // server variable configures this)
        }
    });
}

exports.db = connection;
exports.reconnect = reconnect;