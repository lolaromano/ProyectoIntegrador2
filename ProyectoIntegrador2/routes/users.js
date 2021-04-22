var express = require('express');
var router = express.Router();
const registerController = require('../controllers/registerController');
const loginController = require('../controllers/loginController');
const profileEditController = require('../controllers/profileEditController');
let profileController = require ('../controllers/profileController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get ('/', registerController.register);

router.get ('/login', loginController.login);

router.get ('/profile', profileController.profile);

router.get ('/profileEdit', profileEditController.profileEdit);

module.exports = router;
