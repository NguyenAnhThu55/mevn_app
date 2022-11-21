const authController = require("../controllers/authControllers");
const middlewareController = require("../controllers/middlewareController");
const router = require("express").Router();
// register
router.post('/register', authController.register);
// login
router.post('/login', authController.login);
// logout
router.post('/logout',middlewareController.verifyToken, authController.logout);
module.exports = router;

