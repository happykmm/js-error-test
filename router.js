let express = require('express');
let router = express.Router();
let jade = require('jade');
let fs = require('fs');


router.get('/api/:statusCode', function(req, res, next) {
    let statusCode = req.params.statusCode - 0;
    res.status(statusCode).end();
});


router.get('/type/:typeName', (req, res, next) => {
   let typeName = req.params.typeName;
   res.render('type', {
       title: typeName,
       templateRender: jade.renderFile
   });
});

router.get('/', function(req, res, next) {
    fs.readdir('./views/include', (err, files) => {
        if (err) {
            console.log(err);
            return;
        }
        files = files.map(file => file.replace(/.jade$/, ''));
        res.render('index', {
            title: 'links',
            files: files
        });
    });
});

module.exports = router;
