var express = require('express');
var router = express.Router();
const productAddController = require('../controllers/productAddController');
const indexController = require('../controllers/indexController');
const searchResultsController = require('../controllers/searchResultsController');
const productosController = require('../controllers/productosController');

/* GET home page. */

router.get ('/index', indexController.index);

router.get ('/product', productosController.product); 

router.get ('/searchResults', searchResultsController.searchResults);

router.get ('/productAdd', productAddController.productAdd);




module.exports = router;