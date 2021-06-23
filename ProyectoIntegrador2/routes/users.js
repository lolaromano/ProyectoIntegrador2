var express = require('express');
var router = express.Router();
let usersController = require('../controllers/usersController');

router.get('/profileOthers/:id', usersController.profileOthers); //devuelve el perfil de los comentarios
router.get('/profile', usersController.profile); //devuelve el perfil del usuario logeado
router.get('/profileEdit', usersController.profileEdit); //devuelve el form para editar informacion del usuario logeado

module.exports = router;