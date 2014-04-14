/**
 * Created by amirsaber on 4/12/14.
 */
var express = require('express');
var router = express.Router();
var mysql = require('../database');

/* GET home page. */
router.get('/:country_name', function(req, res) {
    var query = 'SELECT country_id, country as country_name,(SELECT count(*) FROM customer_list where country=country_name) as total_customers FROM country WHERE country LIKE '+ mysql.pool.escape(req.params.country_name+'%') + 'LIMIT 0,10';
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
