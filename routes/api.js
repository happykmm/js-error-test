var express = require('express');
var router = express.Router();


router.get('/:statusCode', function(req, res, next) {
    var statusCode = req.params.statusCode - 0;
    res.status(statusCode).end();
});


module.exports = router;
