var express = require('express');
var router = express.Router();

/* GET computation page. */
router.get('/', function (req, res, next) {
  var p;
  
  var random = Math.random();
  console.log(req.query.p);
  x = req.query.p;

  // checking if url has params
  if (p == undefined) {
    p = random;
  }
  
  let fround = Math.fround(p)  
  let radm = Math.random(p)
  let round = Math.round(p) 
 
  res.render('computation', {
    title: 'Computation',
    Calculate: `applied to ` + p  + ` is ` + fround,
    c1: `applied to ` + p + ` is ` + radm,
    c2: `applied to ` + p + ` is ` + round,
    
  });
});

module.exports = router;
