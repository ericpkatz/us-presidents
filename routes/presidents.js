var express = require('express');
var router = express.Router();
var db = require('../db/presidents');

router.get('/', function(req, res){
    res.render('presidents', { presidents: db.list() });
});

router.post('/', function(req, res){
    db.insert(req.body);
    res.redirect('/presidents');
});

router.get('/new', function(req, res){
    res.render('presidents_new');
});

module.exports = router;