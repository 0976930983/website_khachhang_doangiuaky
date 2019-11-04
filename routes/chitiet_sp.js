var express = require('express');
var router = express.Router();


router.get('/dell3480', function(req, res, next) {
  res.render('chitiet_sp/dell3480', { title: 'Express' });
});
router.get('/dell3567', function(req, res, next) {
    res.render('chitiet_sp/dell3567', { title: 'Express' });
  });
router.get('/dell9380', function(req, res, next) {
    res.render('chitiet_sp/dell9380', { title: 'Express' });
});
router.get('/hp1', function(req, res, next) {
    res.render('chitiet_sp/hp1', { title: 'Express' });
});
router.get('/hp2', function(req, res, next) {
    res.render('chitiet_sp/hp2', { title: 'Express' });
});
router.get('/hp3', function(req, res, next) {
    res.render('chitiet_sp/hp3', { title: 'Express' });
});
router.get('/msi1', function(req, res, next) {
    res.render('chitiet_sp/msi1', { title: 'Express' });
});
router.get('/msi2', function(req, res, next) {
    res.render('chitiet_sp/msi2', { title: 'Express' });
});
router.get('/msi3', function(req, res, next) {
    res.render('chitiet_sp/msi3', { title: 'Express' });
});
module.exports = router;