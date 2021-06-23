var express = require('express');
var router = express.Router();
let productosController = require('../controllers/productosController');
let multer = require('multer');
let path = require('path'); //busca cosas x url



let storage = multer.diskStorage({ //guarda dentro de storage una ruta (destino, filename)
    destination: (req, file, cb) => {
        cb(null, 'public/images/jordan') //destino
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)) //extaname (con que nombre se guarda) 
    },
});

let upload = multer({
    storage: storage 
})

router.post('/productAdd', upload.single('jordan'), productosController.add); //upload.single -> solo suban una foto // 'jordan' -> va a la carpeta jordan
router.get('/id/:id', productosController.index); //devuelve el index
router.get('/productAdd', productosController.productAdd); //devuelve el form de agregar productos
router.get('/allProducts', productosController.allProducts); //devuelve todos los productos
router.get('/search', productosController.search);
router.get('/borrar/:id', productosController.borrar); //para borrar los id
router.get('/detail/:id', productosController.show);
router.post('/detail/:id', productosController.borrar);
router.get('/edit/:id', productosController.edit);
router.post('/edit/:id', productosController.update); //una vez que hago los cambios
router.post('/comentario/:id', productosController.comentario);


module.exports = router;

