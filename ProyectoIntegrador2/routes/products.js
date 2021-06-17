var express = require('express');
var router = express.Router();

let productosController = require('../controllers/productosController');

/* GET products */

router.get ('/products/:id', productosController.products); //devuelve el index

router.get ('/productAdd/:id', productosController.productAdd); //devuelve el form de agregar productos

router.get ('/allProducts/:id', productosController.allProducts); //devuelve todos los productos

router.get('/search', productosController.search); 

router.get('/create', productosController.productAdd);

router.post('/create', productosController.store);

router.get('/borrar/:id', productosController.borrar);

router.post('/detail/:id', productosController.detail);

router.get('/edit/:id', productosController.edit);

router.post('/edit/:id', productosController.update);

module.exports = router;

//router.get('/', productosController.index);
//router.get('/detalle/:id', productosController.show);

//router.get('/search', productosController.search)





