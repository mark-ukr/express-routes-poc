// var express = require('express');
// var router = express.Router();

// /* GET home page. */

// router.get('/', function(req, res) {
//   res.render('index', { title: 'Express' });
// });

const CustomDomainRouter = require('../lib/CustomDomainRouter');


const router = new CustomDomainRouter();

router.get('/test', (req, res) => {
    res.send(`Test page. Unique name is: ${req.params.uniqueName}`);
});


module.exports = router.middleware();
