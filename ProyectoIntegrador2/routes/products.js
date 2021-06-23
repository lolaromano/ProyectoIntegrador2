var express = require('express');
var router = express.Router();
let productosController = require('../controllers/productosController');

router.get('/id/:id', productosController.index); //devuelve el index
router.get('/productAdd', productosController.productAdd); //devuelve el form de agregar productos
router.get('/allProducts', productosController.allProducts); //devuelve todos los productos
router.get('/search', productosController.search);
router.get('/create', productosController.add); //nos dirige a un formulario de productAdd
router.post('/create', productosController.store); //cuando guardo mi producto en product add, se guardan x aca
router.get('/borrar/:id', productosController.borrar); //para borrar los id
router.get('/detail/:id', productosController.show);
router.post('/detail/:id', productosController.borrar);
router.get('/edit/:id', productosController.edit);
router.post('/edit/:id', productosController.update); //una vez que hago los cambios

router.post('/comentario/:id', productosController.comentario);

// let storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'public/images/jordan')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
//     },
// });

// let upload = multer({
//     storage: storage
// })

// router.post('/', upload.single('jordan'), productosController.add);



module.exports = router;

