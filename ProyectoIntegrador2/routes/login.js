const express = require ("express");
const router = express.Router ();
const loginController = require ('../controllers/loginController.js')

router.get ('/', loginController.index);

router.post ('/', loginController.login);

router.post ('/logout', loginController.logout);



module.exports = router;
