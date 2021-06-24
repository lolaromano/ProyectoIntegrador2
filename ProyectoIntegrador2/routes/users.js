var express = require('express');
var router = express.Router();
let usersController = require('../controllers/usersController');
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

router.get('/profileOthers/:id', usersController.profileOthers); //devuelve el perfil de los comentarios
router.get('/profile', usersController.profile); //devuelve el perfil del usuario logeado
router.get('/profileEdit', usersController.profileEdit); //devuelve el form para editar informacion del usuario logeado
router.post('/profileEdit', upload.single('users'), usersController.profileEditPost); 
module.exports = router;