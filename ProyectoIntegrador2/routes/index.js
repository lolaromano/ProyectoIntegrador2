var express = require('express');
var router = express.Router();
let indexController = require("../controllers/indexController");

/* GET home page. */

router.get ('/', indexController.index); //devuelve la pagina principal

module.exports = router;
