var express = require('express');
var router = express.Router();


router.get('/giaohang', function(req, res, next) {
  res.render('muahang/giaohang', { title: 'Express' });
});
router.get('/giohang', function(req, res, next) {
  res.render('muahang/giohang', { title: 'Express' });
});
router.get('/lichsu_trangthai', function(req, res, next) {
    res.render('muahang/lichsu_trangthai', { title: 'Express' });
  });
  
module.exports = router;