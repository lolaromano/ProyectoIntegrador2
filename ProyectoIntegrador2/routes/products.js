var express = require('express');
var router = express.Router();

let productosController = require('../controllers/productosController');

/* GET products */

router.get ('/:id', productosController.products); //devuelve el index

router.get ('/productAdd/:id', productosController.productAdd); //devuelve el form de agregar productos

router.get ('/allProducts/:id', productosController.allProducts); //devuelve todos los productos


module.exports = router;