var express = require('express');
var router = express.Router();
// CONTROLLERS //
let indexController = require('../controllers/indexController');
<<<<<<< HEAD
=======
//let searchResultsController = require('../controllers/searchResultsController');
>>>>>>> 2cbca344205ff2e458c9ee1fa8e1a1aaf13fa643


/* GET home page. */

router.get ('/', indexController.index);

router.get ('/searchResults', indexController.search);


module.exports = router;
