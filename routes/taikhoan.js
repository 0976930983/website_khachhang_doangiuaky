var express = require('express');
var router = express.Router();


router.get('/bosungthongtin', function(req, res, next) {
  res.render('taikhoan/bosungthongtin', { title: 'Express' });
});
router.get('/dangky', function(req, res, next) {
  res.render('taikhoan/dangky', { title: 'Express' });
});
router.get('/dangnhap', function(req, res, next) {
  res.render('taikhoan/dangnhap', { title: 'Express' });
});
router.get('/quenmatkhau', function(req, res, next) {
    res.render('taikhoan/quenmatkhau', { title: 'Express' });
  });
  
module.exports = router;
