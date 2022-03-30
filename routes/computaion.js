var express = require('express');
const { param } = require('./users');
var router = express.Router();
var p = Math.random().toFixed(2);


console.log(p);
/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.query.p != undefined) {
    p = req.query.p;
  }
   
  res.render('computation', { Calculate: 'Round of ' +p+' is '+Math.round(p) });
});
module.exports = router;