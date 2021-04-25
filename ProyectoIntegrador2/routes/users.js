var express = require('express');
var router = express.Router();

let usersController = require('../controllers/usersController');

/* GET users */

router.get ('/profileOthers/:id', usersController.profileOthers); //devuelve el perfil de los comentarios

router.get ('/register', usersController.register); //devuelve el form para registrarse

router.get ('/login', usersController.login); //devuelve el form para inciar sesion

router.get ('/profile', usersController.profile); //devuelve el perfil del usuario logeado

router.get ('/profileEdit', usersController.profileEdit); //devuelve el form para editar informacion del usuario logeado


module.exports = router;
