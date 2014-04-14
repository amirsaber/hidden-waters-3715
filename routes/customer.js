/*
 Author:AmirSaber Sharifi
 Language: JavaScript
 Framework: Nodejs
 Description: Request for /customer file will route to here. This file will return json object of customers with country name provided
 */
var express = require('express');
var router = express.Router();
var mysql = require('../database');

router.get('/:country_name', function(req, res) {
    var query = 'SELECT ID, country, `name`, email FROM customer_list left join customer ON customer_list.ID = customer.customer_id WHERE country = ' + mysql.pool.escape(req.params.country_name) + ' ORDER BY ID ASC';
    mysql.pool.getConnection(function(err,connection){
        if(err){
            throw err;
        }
        connection.query(query, function(err, rows, fields){
            if(err){
                throw err;
            }
            connection.release();
            res.json(rows);
        });
    });
});

module.exports = router;
