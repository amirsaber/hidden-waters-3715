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
    hcapital: {//HCapital Server
        mode: 'hcapital',
        port: 8888,
        mysql: {
            host: 'hcapital.ckn7qnbu0auv.us-east-1.rds.amazonaws.com',
            user: 'sakila_user',
            password: 'HCapital1',
            port: 3306,
            database: 'sakila'
        }
    },
    heroku: {//Heroku Server
        mode: 'heroku',
        port: process.env.PORT,
        mysql: {
            host: "us-cdbr-east-05.cleardb.net",
            user: "b6dfafc00e1a20",
            password: "620c2501",
            database: "heroku_a9593bf841220c8"
        }
    }
}
module.exports = function(mode) {
    return config[mode || process.argv[2] || 'local'] || config.local;
}