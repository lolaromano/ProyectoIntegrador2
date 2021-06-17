var express = require('express');
var router = express.Router();

let indexController = require("../controllers/indexController");


/* GET home page. */

router.get ('/', indexController.index); //devuelve la pagina principal

// router.get ('/searchResults', indexController.search); //devuelve los resultados de busqueda


module.exports = router;
