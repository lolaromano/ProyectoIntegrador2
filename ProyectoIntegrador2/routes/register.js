var express = require('express');
var router = express.Router();
var registerController = require('../controllers/registerController');
let multer = require('multer')
let path = require('path');


let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/users')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    },
});
let upload = multer({
    storage: storage
})

router.get('/', registerController.index);
router.post('/', upload.single('users'), registerController.store);

//Para que multer tome la información proveniente del formulario 
//y la entregue al método del controlador

module.exports = router;