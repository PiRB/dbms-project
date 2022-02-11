var express = require('express');
var router = express.Router();
const queries = require('../services/queries')


/* GET home page. */
router.get('/', async function(req, res, next) {
  rows = await queries.mainSelect();
  res.render('index', { title: 'DBMS Project', rows: rows });
});

module.exports = router;
