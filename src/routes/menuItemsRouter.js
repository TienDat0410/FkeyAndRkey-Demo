const menuItemsController = require("../controllers/menuItemsController");

const router = require("express").Router();

router.post("/addMenu", menuItemsController.addMenuItem);

module.exports = router;