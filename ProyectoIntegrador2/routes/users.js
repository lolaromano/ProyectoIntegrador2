var express = require('express');
var router = express.Router();

let usersController = require('../controllers/usersController');



/* GET users listing. */
router.get ('/profileOthers/:id', usersController.profileOthers);

router.get ('/register', usersController.register);

router.get ('/login', usersController.login);

router.get ('/profile', usersController.profile);

router.get ('/profileEdit', usersController.profileEdit);

router.get ('/headerLogueado', usersController.headerLogueado);

module.exports = router;
