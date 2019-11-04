var express = require('express');
var router = express.Router();


router.get('/cao', function(req, res, next) {
  res.render('cauhinh/cao', { title: 'Express' });
});
router.get('/trungbinh', function(req, res, next) {
  res.render('cauhinh/trungbinh', { title: 'Express' });
});

  
module.exports = router;
