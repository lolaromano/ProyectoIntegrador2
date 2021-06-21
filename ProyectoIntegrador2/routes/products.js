var express = require('express');
var router = express.Router();

let productosController = require('../controllers/productosController');

/* GET products */

router.get ('/products/:id', productosController.products); //devuelve el index

router.get ('/productAdd/:id', productosController.productAdd); //devuelve el form de agregar productos

router.get ('/allProducts/:id', productosController.allProducts); //devuelve todos los productos

router.get('/search', productosController.search); 

router.get('/create', productosController.add); //nos dirige a un formulario de productAdd

router.post('/create', productosController.store); //cuando guardo mi producto en product add, se guardan x aca

router.get('/borrar/:id', productosController.borrar);//para borrar los id

router.get('/detail/:id', productosController.show);

router.post('/detail/:id', productosController.borrar);

router.get('/edit/:id', productosController.edit);

router.post('/edit/:id', productosController.update);//una vez que hago los cambios

module.exports = router;

//router.get('/detalle/:id', productosController.show);

//router.get('/search', productosController.search)





