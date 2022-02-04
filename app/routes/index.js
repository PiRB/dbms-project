var express = require('express');
var router = express.Router();
var pool = require('../utils/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  const firstSelect = () => {
    pool.getConnection()
        .then(conn => {

          conn.query("select actor_id, first_name, last_name from actor where last_name like 'B%'")
              .then((rows) => {
                console.log(rows);
              })
        }).catch(err => {
      //not connected
    });
  }
  console.log(firstSelect())
  res.render('index', { title: 'Express' });
});

module.exports = router;
