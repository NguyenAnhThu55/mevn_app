const router = require("express").Router();
const middlewareController = require("../controllers/middlewareController");
const userController = require("../controllers/userController")

// get All Users
router.get("/",middlewareController.verifyToken,userController.getAllUsers);

// Delete Users
router.delete("/:id",middlewareController.verifyTokenAndAdminAuth,userController.deleteUsers);
module.exports = router;