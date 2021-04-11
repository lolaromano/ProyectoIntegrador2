var express = require('express');
var router = express.Router();
let controller = require ("../controllers/miperfilController")


router.get('/', controller.index);


module.exports = router;
