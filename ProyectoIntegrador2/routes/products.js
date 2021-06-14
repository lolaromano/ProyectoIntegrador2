var express = require('express');
var router = express.Router();

let productosController = require('../controllers/productosController');

/* GET products */

router.get ('/:id', productosController.products); //devuelve el index

router.get ('/productAdd/:id', productosController.productAdd); //devuelve el form de agregar productos

router.get ('/allProducts/:id', productosController.allProducts); //devuelve todos los productos


//router.get('/', productosController.index);
//router.get('/detalle/:id', productosController.show);
router.post('/detalle/:id', productosController.destroy);
//router.get('/search', productosController.search)
router.get('/create', productosController.productAdd);
router.post('/create', productosController.store);
router.get('/borrar/:id', productosController.borrar);
//router.get('/sql', productosController.sql);
router.get('/edit/:id', productosController.edit);
router.post('/edit/:id', productosController.update);

module.exports = router;