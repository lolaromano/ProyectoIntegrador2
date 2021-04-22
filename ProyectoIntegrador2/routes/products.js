var express = require('express');
var router = express.Router();

let productosController = require('../controllers/productosController');

/* GET home page. */


router.get ('/', productosController.products); //devuelve todos los productos

router.get ('/productAdd', productosController.productAdd); //muestra el form

router.get ('/allProducts', productosController.allProducts); 

module.exports = router;