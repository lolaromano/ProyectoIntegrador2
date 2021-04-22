var express = require('express');
var router = express.Router();
// CONTROLLERS //
let indexController = require('../controllers/indexController');


/* GET home page. */

router.get ('/', indexController.index);

router.get ('/searchResults', indexController.search);


module.exports = router;
