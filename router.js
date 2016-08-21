var express = require('express');
var router = express.Router();


router.get('/api/:statusCode', function(req, res, next) {
    var statusCode = req.params.statusCode - 0;
    res.status(statusCode).end();
});


router.get('/users', function(req, res, next) {
    res.render('users', { title: 'Users Page' });
});


router.get('/callstack', function(req, res, next) {
    res.render('callstack', { title: 'Callstack' });
});

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
