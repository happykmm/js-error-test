var express = require('express');
var router = express.Router();


router.get('/404', function(req, res, next) {
    res.status(404).end();
});


router.get('/401', function(req, res, next) {
    res.status(401).end();
});

module.exports = router;
