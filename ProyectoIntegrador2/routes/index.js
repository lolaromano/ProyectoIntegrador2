var express = require('express');
var router = express.Router();
let indexController = require('../controllers/indexController');
let headerLogueadoController = require('../controllers/headerLogueadoController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get ('/', indexController.index);

router.get ('/headerLogueado', headerLogueadoController.headerLogueado);




module.exports = router;
