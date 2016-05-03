/*
 Author:AmirSaber Sharifi
 Language: JavaScript
 Framework: Nodejs
 Description: Configuration
 */
var config = {
    local: {//My local computer
        mode: 'local',
        port: 8080,
        mysql: {
            host: '127.0.0.1',
            user: 'root',
            password: 'password',
            database: 'sakila'
        }
    },
    heroku: {//Heroku Server
        mode: 'heroku',
        port: process.env.PORT,
        mysql: process.env.CLEARDB_DATABASE_URL
    }
}
module.exports = function(mode) {
    console.log(process.argv[2]);
    return config[mode || process.argv[2] || 'local'] || config.local;
}