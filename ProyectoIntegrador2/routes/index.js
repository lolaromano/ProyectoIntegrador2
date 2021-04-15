var express = require('express');
var router = express.Router();
let homeController = require ('../controllers/homeController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get ('/', homeController.index);

router.get ('/register', homeController.register);

router.get ('/login', homeController.login);

router.get ('/product', homeController.product);

router.get ('/headerLogueado', homeController.headerLogueado);

router.get ('/searchResults', homeController.searchResults);

router.get ('/productAdd', homeController.productAdd);

router.get ('/profileEdit', homeController.profileEdit);





module.exports = router;
