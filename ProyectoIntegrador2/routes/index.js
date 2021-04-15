var express = require('express');
var router = express.Router();
// CONTROLLERS //
let indexController = require('../controllers/indexController');
let headerLogueadoController = require('../controllers/headerLogueadoController');
let registerController = require('../controllers/registerController');
let loginController = require('../controllers/loginController');
let productController = require('../controllers/productController');
let productAddController = require('../controllers/productAddController');
let profileController = require ('../controllers/profileController');
let searchResultsController = require('../controllers/searchResultsController');
let profileEditController = require('../controllers/profileEditController');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get ('/index', indexController.index);

router.get ('/headerLogueado', headerLogueadoController.headerLogueado);

router.get ('/register', registerController.register);

router.get ('/login', loginController.login);

router.get ('/product', productController.product); 

router.get ('/productAdd', productAddController.productAdd);

router.get ('/profile', profileController.profile);

router.get ('/profileEdit', profileEditController.profileEdit);

router.get ('/searchResults', searchResultsController.searchResults);


module.exports = router;
