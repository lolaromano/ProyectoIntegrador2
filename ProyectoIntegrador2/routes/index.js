var express = require('express');
var router = express.Router();
// CONTROLLERS //
let indexController = require('../controllers/indexController');
let registerController = require('../controllers/registerController');
let loginController = require('../controllers/loginController');
let productAddController = require('../controllers/productAddController');
let profileController = require ('../controllers/profileController');
let searchResultsController = require('../controllers/searchResultsController');
let profileEditController = require('../controllers/profileEditController');
let productosController = require ('../controllers/productosController')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get ('/', indexController.index);

router.get ('/register', registerController.register);

router.get ('/login', loginController.login);

router.get ('/productAdd', productAddController.productAdd);

router.get ('/profile', profileController.profile);

router.get ('/profileEdit', profileEditController.profileEdit);

router.get ('/searchResults', searchResultsController.searchResults);

router.get ('/productos', productosController.productos)


module.exports = router;
