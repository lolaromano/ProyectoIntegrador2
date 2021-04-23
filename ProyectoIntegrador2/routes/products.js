var express = require('express');
var router = express.Router();

let productosController = require('../controllers/productosController');

/* GET home page. */


router.get ('/:id', productosController.products); //devuelve todos los productos

router.get ('/productAdd/:id', productosController.productAdd); //muestra el form

router.get ('/allProducts/:id', productosController.allProducts); 

module.exports = router;