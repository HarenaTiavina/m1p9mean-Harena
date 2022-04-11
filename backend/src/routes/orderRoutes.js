const express = require("express");
const router = express.Router();
const orderController = require("../controller/orderController");
const TokenManager = require("../utils/tokenManager");

router.post("/", TokenManager.checkClientToken, orderController.create);


module.exports = router;