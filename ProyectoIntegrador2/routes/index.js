var express = require('express');
var router = express.Router();
let indexController = require("../controllers/indexController");

router.get('/', indexController.index); //devuelve la pagina principal

module.exports = router;