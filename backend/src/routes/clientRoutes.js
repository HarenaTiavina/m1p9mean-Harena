const express = require("express");
const router = express.Router();
const clientController = require("../controller/clientController");
const TokenManager = require("../utils/tokenManager");

router.post("/", clientController.create);
router.post("/login", clientController.login);

router.get("/", clientController.findAll);
router.get("/:id", clientController.findById);

router.put("/:id", TokenManager.checkClientToken, clientController.update);

module.exports = router;