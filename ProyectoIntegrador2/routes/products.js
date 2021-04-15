var express = require('express');
var router = express.Router();
const productAddController = require('../controllers/productAddController');
const indexController = require('../controllers/indexController');
const searchResultsController = require('../controllers/searchResultsController');
const productController = require('../controllers/productController');

/* GET home page. */

router.get ('/', indexController.index);

router.get ('/product', productController.product); 

router.get ('/searchResults', searchResultsController.searchResults);

router.get ('/productAdd', productAddController.productAdd);




module.exports = router;