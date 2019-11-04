var express = require('express');
var router = express.Router();


router.get('/hp', function(req, res, next) {
  res.render('hangsx/hp', { title: 'Express' });
});
router.get('/dell', function(req, res, next) {
  res.render('hangsx/dell', { title: 'Express' });
});
router.get('/msi', function(req, res, next) {
  res.render('hangsx/msi', { title: 'Express' });
});

module.exports = router;
