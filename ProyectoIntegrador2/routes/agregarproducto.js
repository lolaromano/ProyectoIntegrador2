var express = require('express');
var router = express.Router();
let controller = require ("../controllers/agregarproductoController")

router.get('/', controller.index);


module.exports = router;