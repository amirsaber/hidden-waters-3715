/**
 * Created by amirsaber on 4/12/14.
 */
var express = require('express');
var router = express.Router();
var mysql = require('../database');

/* GET home page. */
router.get('/:country_name', function(req, res) {
    var query = 'select ID, country, `name`, email FROM customer_list left join customer ON customer_list.ID = customer.customer_id WHERE country = ' + mysql.db.escape(req.params.country_name) + ' ORDER BY ID ASC';
    mysql.db.query(query,function(err, rows, fields){
        if(err){
            mysql.reconnect();
        }
        res.json(rows);
    });
});

module.exports = router;
