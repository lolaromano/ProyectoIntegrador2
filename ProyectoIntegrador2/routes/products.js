var express = require('express');
var router = express.Router();
const productAddController = require('../controllers/productAddController');

const productosController = require('../controllers/productosController');

/* GET home page. */


router.get ('/', productosController.productos); 

router.get ('/productAdd', productAddController.productAdd);




module.exports = router;