var express = require('express');
var router = express.Router();

const productosController = require('../controllers/productosController');

/* GET home page. */


router.get ('/', productosController.products); //devuelve todos los productos

router.get ('/productAdd', productosController.productAdd); //muestra el form




module.exports = router;